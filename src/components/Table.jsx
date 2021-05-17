import React from "react";
import { Table, Typography, Image } from "antd";
import { pokemons } from "../data";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "weight",  
    
  },
  {
    title: "Image",
    dataIndex: "img",
    key: "img",  
    render: (image) => <Image src={image} alt={image} width={100}/>    
  },
  {
    title: "Candy",
    dataIndex: "candy",
    key: "candy",
    filters: [
      {
        text: "Bulbasaur Candy",
        value: "Bulbasaur Candy",
      },
      {
        text: "Charmander Candy",
        value: "Charmander Candy",
      },
      {
        text: "Squirtle Candy",
        value: "Squirtle Candy",
      },
    ],
    onFilter: (value, item)=> item.candy.includes(value)
  },
];
const dataSource = pokemons.map(item => ({...item, key: item.id}))
const _Table = ({rows= 5}) => {
  
  return <Table dataSource={dataSource}
   columns={columns} 
   pagination={ {
     pageSize: rows,

    }
   }/>;
};

export default _Table;
