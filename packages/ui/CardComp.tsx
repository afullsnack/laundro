import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";


export const CardComp = () => {

  interface CardData {
    cardType: String | null,
    cardNumber: String | null,
    cardMonth: String,
    cardYear: String
  }

  const data: CardData[] = [{
    cardType: 'Visa',
    cardNumber: 'xxxx-xxx-xxx',
    cardMonth: '09',
    cardYear: '24'
  }];

  return (
   
    <div style={{
      display: "flex",
      flexFlow: "column",
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%"
    }}>
    {
      data.map((item, index) => <Card key={index} style={{borderRadius: 20, marginBottom: 10, backgroundColor: "white"}} bodyStyle={{ padding: 15, display: "flex", flexFlow: "column", alignItems: "start", justifyContent: "center"}} bordered={false}>
      <h3 style={{margin: 0}}>{item.cardType}</h3>
      <span>{item.cardNumber} {item.cardMonth} {item.cardYear}</span>
    </Card>)
    }
    <Card bordered style={{border: "1px dashed #0644A280", borderRadius: 20, background: "transparent"}} bodyStyle={{ padding: 10, background: "transparent", display: "flex", flexFlow: "row", alignItems: "center", justifyContent: "start"}}>
      <div style={{ width: 40, height: 40, marginRight: 20, backgroundColor: "#0644A215", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <PlusOutlined style={{color: "#0644A2EB", fontSize: 24}} />
      </div>
      <h4 style={{margin: 0, display:"inline-block"}}>Change Default Payment</h4>
    </Card>
    </div>
  );
}