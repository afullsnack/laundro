// import moment from "moment";
import { signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  EnvironmentFilled,
  message,
  RightOutlined,
  Row,
  WalletOutlined,
  weekdays,
} from "ui";
import { useLogoutDrawer } from "ui/hooks";
import { withUserLayout } from "../../components/Layout";
import { MAIN_URL } from "../../lib/global";
import styles from "../../styles/Home.module.css";

export default withUserLayout(({ pageWidth }) => {
  const router = useRouter();
  const [day, setDay] = useState(weekdays()[new Date().getDay()]);
  const [recurringValue, setRecurringValue] = useState("weekly");
  const [visible, setVisible] = useState(false);

  const { logoutDrawer, SetLogoutDrawer } = useLogoutDrawer(
    pageWidth,
    [
      () => {
        /*Logout function handle some cleanup*/
        signOut({ callbackUrl: `${MAIN_URL}/?login` }); //Take user back to the login page
      },
      () => logoutDrawer.close(),
    ],
    styles
  );

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
        <title>User profile</title>
        <meta name="description" content="The users profile" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Row
          gutter={[8, 16]}
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
              Profile
            </h2>
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
            <Card
              bordered={false}
              style={{ borderRadius: 8, width: "100%" }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ margin: 0, textAlign: "left", flex: 1 }}>Wallet</h3>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "end",
                  justifyContent: "center",
                  flex: 3,
                }}
              >
                <h3 style={{ margin: 0 }}>N0.00</h3>
                <span style={{ fontSize: ".8rem", color: "rgba(0,0,0,.45)" }}>
                  Credit Balance
                </span>
              </div>
            </Card>
            {/* <div
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Card
                style={{
                  borderRadius: 10,
                  marginRight: 10,
                  backgroundColor: "#0644A214",
                  flex: 1,
                }}
                bodyStyle={{
                  paddingTop: 25,
                  paddingBottom: 25,
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0644A2",
                }}
                bordered={false}
              >
                <span>Oct</span>
                <h3 style={{ margin: 0, fontWeight: "bold", color: "#0644A2" }}>
                  28
                </h3>
                <span>2021</span>
              </Card>
              <Card
                bordered={false}
                style={{
                  // border: "1px dashed #0644A280",
                  height: "100%",
                  borderRadius: 10,
                  background: "transparent",
                  flex: 2,
                  backgroundImage: "url('/bags_group.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                bodyStyle={{
                  padding: 0,
                  background: "transparent",
                  display: "flex",
                  flexFlow: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Image
                  src=""
                  // width={"inherit"}
                  preview={false}
                /> 
              </Card>
            </div>
            <Card
              style={{ borderRadius: 20, width: "100%" }}
              bodyStyle={{}}
              bordered={false}
            >
              <div
                style={{ display: "flex", flexFlow: "column", width: "100%" }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Frequency</h4>
                  <span style={{ color: "#5D6571AC" }}>Wednesday Weekly</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Location</h4>
                  <span style={{ color: "#5D6571AC" }}>333 Fremont Street</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ color: "#000000" }}>Credit Card</h4>
                  <span style={{ color: "#5D6571AC" }}>8689 VISA</span>
                </div>
              </div>
            </Card> */}
          </Col>
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
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "space-evenly",
                paddingTop: 0,
              }}
              title={
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  YOUR INFORMATION
                </h4>
              }
              headStyle={{ borderBottom: "none" }}
              extra={
                <Button
                  type="link"
                  size="small"
                  onClick={() => {
                    // TODO: open a modal to update users details
                  }}
                >
                  Edit
                </Button>
              }
            >
              <span style={{ color: "#5D6571" }}>John Nnamdi</span>
              <span style={{ color: "#5D6571" }}>jn222@gmail.com</span>
              <span style={{ color: "#5D6571" }}>0812 454 3829</span>
            </Card>
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
                // TODO: Link to Address list/Add address modal
              }}
            >
              <EnvironmentFilled style={{ color: "#0644A2", fontSize: 24 }} />
              <h4 style={{ margin: 0, color: "#0644A2", marginTop: 10 }}>
                Addresses
              </h4>
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
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
                // TODO: Link to Payment methods list/Add payment method modal
              }}
            >
              <WalletOutlined style={{ color: "#0644A2", fontSize: 24 }} />
              <h4 style={{ margin: 0, color: "#0644A2", marginTop: 10 }}>
                Payment Methods
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
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // DONE: link to cleaning prefs page
                router.push("/profile/cleaning_prefs");
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Cleaning Preferences
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // DONE: handle click to communication prefs
                router.push("/profile/comms_pref");
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Communication Preferences
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // DONE: Link to the bag request page
                router.push("/profile/bag_request");
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Bag Request
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // DONE: Link to the referal page
                router.push("/profile/referral");
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Refer A Friend
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // TODO: Link to gift cards page and integrate
                message.info("Feature coming soon...");
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Gift Cards
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Card
              hoverable
              bordered={false}
              style={{
                width: "100%",
                borderRadius: 8,
                flex: 1,
                marginBottom: 10,
              }}
              bodyStyle={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => {
                // TODO: Setup change password Modal flow
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#000000",
                  flex: 6,
                  textAlign: "left",
                }}
              >
                Change Password
              </h4>
              <RightOutlined
                style={{ color: "#000000", fontSize: 24, flex: 1 }}
              />
            </Card>
            <Button
              className={styles.ghost_btn}
              size="large"
              onClick={() => logoutDrawer.open()}
            >
              Logout
            </Button>
          </Col>
        </Row>
        {SetLogoutDrawer()}
      </main>
    </div>
  );
});
