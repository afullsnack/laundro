// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Card,
  Carousel,
  Col,
  DollarOutlined,
  MailFilled,
  MessageFilled,
  PhoneFilled,
  PlayPause,
  QuestionOutlined,
  Row,
  weekdays,
} from "ui";
import { withUserLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);

  const onRecurringChange = (e) => {
    console.log("Recurring checked", e.target.value);
    setRecurringValue(e.target.value);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  console.log(pageWidth, "Review page");

  return (
    <div className={styles.container}>
      <Head>
        <title>Support</title>
        <meta name="description" content="User support available" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 32]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 60px 0",
            // padding: 0,
            overflowY: "scroll",
          }}
        >
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#0644A215",
                borderRadius: "100%",
              }}
            >
              <CheckOutlined style={{ color: "#0644A2", fontSize: 25 }} />
            </div> */}
            <h2
              style={{
                margin: 0,
                textAlign: "left",
                width: "100%",
                display: "inline-block",
              }}
            >
              Support
            </h2>
            <span style={{ textAlign: "left" }}>
              We’re available Monday to Friday from 8:00AM To 8:00PM EST
            </span>
            <br />
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                // padding: 10,
                // borderRadius: "100%",
              }}
            >
              <Card
                hoverable
                bordered={false}
                style={{
                  background: "transparent",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 20,
                  backgroundColor: "#0644A215",
                  borderRadius: "100%",
                }}
              >
                <MessageFilled style={{ color: "#0644A2", fontSize: 25 }} />
              </Card>
              <Card
                hoverable
                bordered={false}
                style={{
                  background: "transparent",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 20,
                  backgroundColor: "#0644A215",
                  borderRadius: "100%",
                }}
              >
                <PhoneFilled style={{ color: "#0644A2", fontSize: 25 }} />
              </Card>
              <Card
                hoverable
                bordered={false}
                style={{
                  background: "transparent",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 20,
                  backgroundColor: "#0644A215",
                  borderRadius: "100%",
                }}
              >
                <MailFilled style={{ color: "#0644A2", fontSize: 25 }} />
              </Card>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginRight: 10,
                background: "#7D90AA15",
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                paddingTop: 25,
                paddingBottom: 25,
              }}
              onClick={() => {
                // TODO: Link to Subscription tier page
              }}
            >
              <DollarOutlined style={{ color: "#0644A2", fontSize: 24 }} />
              <h4 style={{ margin: 0, color: "#0644A2", marginTop: 10 }}>
                Pricing
              </h4>
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                background: "#7D90AA15",
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                paddingTop: 25,
                paddingBottom: 25,
              }}
              onClick={() => {
                // TODO: Link to FAQ's page
              }}
            >
              <QuestionOutlined style={{ color: "#0644A2", fontSize: 24 }} />
              <h4 style={{ margin: 0, color: "#0644A2", marginTop: 10 }}>
                FAQ's
              </h4>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 24 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4 style={{ textAlign: "left", width: "100%", margin: 0 }}>
              Video FAQ's
            </h4>
            <br />
            <div style={{ width: "100%" }}>
              <Carousel
                autoplay={true}
                draggable
                accessibility={true}
                style={{ height: "auto", width: "100%" }}
                afterChange={(current) => console.log("Current slide", current)}
                slidesToShow={1}
                centerPadding="30px"
                centerMode={true}
                dots={false}
              >
                <div>
                  <Card
                    hoverable={false}
                    bordered={false}
                    style={{
                      width: "100%",
                      backgroundImage: "url('/bags_group.png')",
                      backgroundSize: "60%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      overflow: "hidden",
                    }}
                    bodyStyle={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                      borderRadius: 8,
                      padding: 0,
                      paddingTop: 30,
                      paddingBottom: 30,
                      background: "rgba(0,0,0,.45)",
                    }}
                    onClick={() => {
                      // TODO: Link to FAQ's page
                    }}
                  >
                    <PlayPause />
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable={false}
                    bordered={false}
                    style={{
                      width: "100%",
                      backgroundImage: "url('/bags_group.png')",
                      backgroundSize: "60%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      overflow: "hidden",
                    }}
                    bodyStyle={{
                      display: "flex",
                      flexFlow: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                      borderRadius: 8,
                      padding: 0,
                      paddingTop: 30,
                      paddingBottom: 30,
                      background: "rgba(0,0,0,.45)",
                    }}
                    onClick={() => {
                      // TODO: Link to FAQ's page
                    }}
                  >
                    <PlayPause />
                  </Card>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
});
