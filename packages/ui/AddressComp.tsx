import { HomeFilled, PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";


export const AddressComp = () => {

  interface CardData {
    title: String | null,
    address: String | null
  }

  const data: CardData[] = [{
    title: 'Home',
    address: '333 Fremont Street'
  }];

  return (
   
    <div style={{
      display: "flex",
      flexFlow: "row",
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%"
    }}>
    {
      data.map((item, index) => <Card key={index} style={{borderRadius: 20, marginRight: 10, backgroundColor: "white"}} bodyStyle={{ padding: 15, paddingTop: 25, paddingBottom: 25, display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}} bordered={false}>
      <HomeFilled style={{color: "#0644A2", fontSize: 24, marginBottom: 6}} />
      <h3 style={{margin: 0, marginBottom: 5}}>{item.title}</h3>
      <span>{item.address}</span>
    </Card>)
    }
    <Card bordered style={{border: "1px dashed #0644A280", borderRadius: 20, background: "transparent"}} bodyStyle={{ padding: 25, background: "transparent", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{ width: 40, height: 40, marginBottom: 10, backgroundColor: "#0644A215", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <PlusOutlined style={{color: "#0644A2EB", fontSize: 24}} />
      </div>
      <h4 style={{margin: 0, display:"inline-block"}}>Change Default Address</h4>
    </Card>
    </div>
  );
}