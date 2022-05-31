// import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  FacebookOutlined,
  Input,
  PageHeader,
  Row,
  TwitterOutlined,
  UserOutlined,
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

  return (
    <div className={styles.container}>
      <Head>
        <title>User profile - Refer a friend</title>
        <meta name="description" content="Refer a friend and win a prize" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            padding: "0 0 40px 0",
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
              alignItems: "start",
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
            <PageHeader
              onBack={() => window.history.back()}
              title="Refer A Friend"
              extra={<></>}
            />
            {/* <span>Select a date for your clothes to be picked up</span> */}
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
            <div style={{ width: "100%" }}>
              <Carousel
                autoplay={false}
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
                    style={{
                      marginRight: 10,
                      background: "transparent",
                    }}
                    bodyStyle={{
                      textAlign: "left",
                      background: "#FF3EB3",
                      borderRadius: 22,
                    }}
                    bordered={false}
                  >
                    <Avatar
                      icon={<UserOutlined style={{ color: "white" }} />}
                      style={{ background: "rgba(0,0,0,.54)" }}
                      size={42}
                    />
                    <br />
                    <br />
                    <h1
                      style={{ margin: 0, color: "white", textAlign: "left" }}
                    >
                      Give N500, <br />
                      Get N500
                    </h1>
                    <span style={{ color: "white" }}>
                      Share your referral code with friends and get N500
                    </span>
                    <br />
                    <br />
                    <Button
                      className={styles.normal_btn}
                      size="large"
                      onClick={() => {}}
                      style={{ flex: 3, background: "white", color: "#FF3EB3" }}
                    >
                      Invite Friend
                    </Button>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      marginRight: 10,
                      background: "transparent",
                    }}
                    bodyStyle={{
                      textAlign: "left",
                      background: "#3351B5",
                      borderRadius: 22,
                    }}
                  >
                    <Avatar
                      icon={<FacebookOutlined style={{ color: "white" }} />}
                      style={{ background: "rgba(0,0,0,.54)" }}
                      size={42}
                    />
                    <br />
                    <br />
                    <h1
                      style={{ margin: 0, color: "white", textAlign: "left" }}
                    >
                      Post on Facebook and Earn N500
                    </h1>
                    <span style={{ color: "white" }}>
                      To claim your credit sent us an email -test@test.com as
                      proof
                    </span>
                    <br />
                    <br />
                    <Button
                      className={styles.normal_btn}
                      size="large"
                      onClick={() => {}}
                      style={{ flex: 3, background: "white", color: "#3351B5" }}
                    >
                      Post on Facebook
                    </Button>
                  </Card>
                </div>
                <div>
                  <Card
                    style={{
                      marginRight: 10,
                      background: "transparent",
                    }}
                    bodyStyle={{
                      textAlign: "left",
                      background: "#03ABD3",
                      borderRadius: 22,
                    }}
                  >
                    <Avatar
                      icon={<TwitterOutlined style={{ color: "white" }} />}
                      style={{ background: "rgba(0,0,0,.54)" }}
                      size={42}
                    />
                    <br />
                    <br />
                    <h1
                      style={{ margin: 0, color: "white", textAlign: "left" }}
                    >
                      Post on Twitter and Earn N500
                    </h1>
                    <span style={{ color: "white" }}>
                      To claim your credit sent us an email -test@test.com as
                      proof
                    </span>
                    <br />
                    <br />
                    <Button
                      className={styles.normal_btn}
                      size="large"
                      onClick={() => {}}
                      style={{ flex: 3, background: "white", color: "#03ABD3" }}
                    >
                      Post on Twitter
                    </Button>
                  </Card>
                </div>
              </Carousel>
            </div>
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
            <Card
              style={{ width: "100%" }}
              bodyStyle={{ textAlign: "center" }}
              actions={[
                <Button type="link" size="middle" style={{ color: "#0644A2" }}>
                  Share
                </Button>,
                <Button type="link" size="middle" style={{ color: "#0644A2" }}>
                  Edit
                </Button>,
              ]}
            >
              <span>Your referral code is:</span>
              <br />
              <br />
              <Input
                type="text"
                size="large"
                style={{
                  border: "1px dashed #0644A2",
                  borderRadius: 22,
                  textAlign: "center",
                }}
                contentEditable={false}
                value={"JOHNNWOW99"}
              />
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
            <Card
              style={{ width: "100%", opacity: 0.65 }}
              bodyStyle={{ textAlign: "left" }}
            >
              <h3 style={{ color: "black" }}>Summary</h3>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "black",
                }}
              >
                <b>Referrals Activated</b>
                <b>0</b>
              </h4>
              <span>
                Number of referrals that have been sent and entered by friends
              </span>
              <Divider orientation="center" />
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "black",
                }}
              >
                <b>Credit Earned</b>
                <b>$0.0</b>
              </h4>
              <span>Amount earned from referrals and successful pickups</span>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
});
