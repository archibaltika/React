import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { List } from "react-virtualized";

const ListData = ({ data }) => {
    const rowCount = data.length;
    const rowHeight = 65;

	const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
		return (
			<ListGroup.Item
				action
				variant="secondary"
				key={key}
				className="d-flex align-items-center"
				style={style}
			>
				<div>
					<a target="_blank" href={data[index].url} rel="noreferrer">
						<img
							alt={data[index].thumbnailUrl}
							src={data[index].thumbnailUrl}
							height="50"
							width="50"
							className="thumbnail rounded mx-3"
						/>
					</a>
				</div>
				<div className="mx-3">{data[index].title}</div>
			</ListGroup.Item>
		);
	};

	return (
		<>
			<List
				width={600}
				height={rowHeight * rowCount}
				rowCount={rowCount}
				rowHeight={rowHeight}
				rowRenderer={rowRenderer}
				className="m-5"
			/>
		</>
	);
};

export default ListData;
