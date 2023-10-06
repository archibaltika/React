import axios from "axios";
import { useEffect, useState } from "react";
import {
	Form,
	Button,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import ListData from "./Components/List";
import PaginationList from "./Components/Pagination";

const DataFilter = (data) =>
	data.filter((obj) => obj.title.split(" ").length <= 7);

const AppForm = (props) => {
	const [filterType, setFilterType] = useState("");
	const [filterValue, setFilterValue] = useState("");

	function handleChange(e) {
		setFilterValue(e.target.value);
		setFilterType(e.target.name);
	}

	function handleSubmit(e) {
		if (filterType !== "") {
			props.handleSubmit(filterType, filterValue);
			setFilterValue("");
		}
		e.preventDefault();
	}

	return (
		<fieldset
			style={{
				border: "1px solid #333",
				borderLeft: "none",
				borderRight: "none",
			}}
			className="m-4"
		>
			<legend
				style={{
					position: "relative",
					top: "-20px",
					left: "20px",
					background: "#fff",
					width: "70px",
					textAlign: "center",
				}}
			>
				Filter
			</legend>
			<Form className="App" onSubmit={handleSubmit}>
				<Form.Group className="mb-3 w-50 d-flex justify-content-around align-items-center">
					<Form.Control
						className="m-3 w-75"
						type="text"
						placeholder="Filter by album id"
						name="album"
						onChange={handleChange}
					/>
					<Form.Control
						className="m-3 w-75"
						type="text"
						name="title"
						placeholder="Filter by title"
						onChange={handleChange}
					/>
					<Button variant="primary" type="submit">
						Apply
					</Button>
				</Form.Group>
			</Form>
		</fieldset>
	);
};

const AppSort = (props) => {
	const [sortType, setSortType] = useState("Ascending");
	const [sortBy, setSortBy] = useState("Album");

	const handleChangeSortBy = (e) => {
		const ddSortBtn = document.getElementById("dropdown-sort-button");
		ddSortBtn.innerHTML = e.target.name;
		setSortBy(e.target.name);
	};

	const handleChangeSortType = (e) => {
		setSortType(e.target.name);
	};

	useEffect(() => {
		props.handleChange(sortType, sortBy);
	}, [sortType, sortBy]);

	return (
		<>
			<fieldset
				style={{
					border: "1px solid #333",
					borderLeft: "none",
					borderRight: "none",
				}}
				className="m-4"
			>
				<legend
					style={{
						position: "relative",
						top: "-20px",
						left: "20px",
						background: "#fff",
						width: "70px",
						textAlign: "center",
					}}
				>
					Sort
				</legend>
				<DropdownButton
					id="dropdown-sort-button"
					variant="secondary"
					menuVariant="dark"
					title="Sort by"
					className="m-4"
				>
					<Dropdown.Item
						id="dd-sort-album-item"
						name="Album"
						onClick={handleChangeSortBy}
					>
						Album
					</Dropdown.Item>
					<Dropdown.Item
						id="dd-sort-title-item"
						name="Title"
						onClick={handleChangeSortBy}
					>
						Title
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item
						id="dd-sort-album-item"
						name="Ascending"
						onClick={handleChangeSortType}
					>
						Ascending
					</Dropdown.Item>
					<Dropdown.Item
						id="dd-sort-title-item"
						name="Descending"
						onClick={handleChangeSortType}
					>
						Descending
					</Dropdown.Item>
				</DropdownButton>
			</fieldset>
		</>
	);
};

const ListRender = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	
	const rowsPerPage= 10;
	const indexLastPageRow = currentPage * rowsPerPage;
	const indexFirstPageRow = indexLastPageRow - rowsPerPage;
	const dataRowCount = data.length;
	const currentPageData = data.slice(indexFirstPageRow, indexLastPageRow);
	const numberOfPages = Math.ceil(dataRowCount / rowsPerPage);
	
	return (
		<div>
			<ListData data={currentPageData} />
			<PaginationList
				numberOfPages={numberOfPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

const PaginationApp = () => {
	const [data, setData] = useState([]);
	const [initialData, setInitialData] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/photos")
			.then((response) => {
				setData(DataFilter(response.data));
				setInitialData(DataFilter(response.data));
			});
	}, []);

	const useFilter = (type, value) => {
		if (value === "") {
			setData(initialData);
			return true;
		}

		if (type === "album") {
			setData(initialData.filter((obj) => obj.albumId === +value));
		} else if (type === "title") {
			let regex = new RegExp(value, "img");
			setData(
				initialData.filter((obj) =>
					obj.title.match(regex) != null ? true : false
				)
			);
		} else return false;

		return true;
	};

	const useSort = (sortType, sortBy) => {
		const copyData = [...initialData];
		if (sortBy === "Album") {
			copyData.sort((a, b) => {
				return sortType === "Ascending"
					? a.albumId - b.albumId
					: b.albumId - a.albumId;
			});
		} else if (sortBy === "Title")
			copyData.sort((a, b) => {
				if (sortType === "Ascending")
					if (a.title < b.title) return -1;
					else if (a.title > b.title) return 1;
					else return 0;
				else if (sortType === "Descending")
					if (a.title > b.title) return -1;
					else if (a.title < b.title) return 1;
					else return 0;
				else return 0;
			});
		else return false;

		setData(copyData);

		return true;
	};

	return (
		<>
			<AppForm handleSubmit={useFilter} />
			<AppSort handleChange={useSort} />
			<ListRender data={data} />
		</>
	);
};

export default PaginationApp;
