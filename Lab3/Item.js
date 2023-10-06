import React, {useState, useEffect} from "react";
import axios from 'axios'

function PhotoApp() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [album, setAlbum] = useState({color: "green"});
    const [click, setClick] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', scroll)
        return function () {
            document.removeEventListener('scroll', scroll)
        }
    }, [])
    useEffect(() => {
        if (fetching) {
            console.log("next page");
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false));
        }
    }, [fetching])
    const scroll = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }
    const fetchPhotos = async () => {
        setLoading(true)
        let response = await fetch("https://jsonplaceholder.typicode.com/photos");
        let photos = await response.json();
        setPhotos(photos);
        setLoading(false)
    }

    function setStyle() {

        switch (click) {
            case true: {

                setAlbum({color: "red"});
                setClick(false);
                console.log(1);
                break;
            }
            case false: {

                setAlbum({color: "black", display: "flex", flexDirection: "row", flexWrap: "wrap"});
                setClick(true);
                console.log(2);
                break
            }
        }
    }

    return (
        <div className="list-group">

            <input type={"checkbox"} onChange={setStyle}/>
            <label>album style</label>
            <div style={album}>
                {loading && <p className="text-center">Loading....</p>}
                {photos.map(photo => <div key={photo.id}>
                        <div> {photo.title}</div>
                        <a href={photo.thumbnailUrl} target={"_blank"}><img src={photo.thumbnailUrl}/></a>
                    </div>
                )}
            </div>
        </div>
    );

}

export default PhotoApp;