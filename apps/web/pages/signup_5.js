import Head from "next/head";
import { useRouter } from "next/router";
import { Avatar, Button, List, withLayout } from "ui";
import styles from "../styles/Home.module.css";

const bagList = [
  {
    title: "Pay As You Go",
    desc: "N35 per bag",
    extra: "",
    count: 1,
    url: "/blue_pickupbag.png",
  },
  {
    title: "5-bag bundle",
    desc: "N31.50 per bag / Total : N157.50",
    extra: "*bags expire if not used within 6 months of purchase",
    count: 5,
    url: "/blue_pickupbag.png",
  },
  {
    title: "5-bag bundle",
    desc: "N29.75 per bag / Total : N297.50",
    extra: "*bags expire if not used within 6 months of purchase",
    count: 10,
    url: "/blue_pickupbag.png",
  },
];

function SignupLocation() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery Bag Sizes</title>
        <meta name="description" content="Sign up to create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Bag Size</h2>
        <span>
          You’ve selected the large bag. Would you like to pay as you go or
          purchase a bag bundle for a discount?
        </span>
        <br />
        <div style={{ width: "100%", textAlign: "left" }}>
          <List
            itemLayout="horizontal"
            dataSource={bagList}
            renderItem={(item) => (
              <List.Item
                style={{
                  border: "1px solid rgba(0,0,0,.1)",
                  marginBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 5,
                  lineHeight: -5,
                }}
              >
                <List.Item.Meta
                  style={{ lineHeight: -5, alignItems: "center" }}
                  avatar={<Avatar src={item.url} size={42} shape="square" />}
                  title={item.title}
                  description={
                    <>
                      <small style={{ lineHeight: -5 }}>{item.desc}</small>
                      <br />
                      <small>{item.extra}</small>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <br />
        <span style={{ fontSize: 13 }}>
          *Bag bundles cannot be combined with other existing offers or promo
          codes
        </span>
        <br />
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button className={styles.ghost_btn} size="large" style={{ flex: 1 }}>
            Back
          </Button>
          <Button
            className={styles.normal_btn}
            size="large"
            style={{ flex: 2, marginLeft: 8 }}
            onClick={() => router.push("/home")}
          >
            Continue
          </Button>
        </div>
        {/* <br />
        <span style={{ fontSize: 13 }}>
          By clicking this button, I agree to the{" "}
          <a href="#">Terms Of Service</a> and <a href="#">Privacy Policy</a>
        </span> */}
      </main>
    </div>
  );
}

export default withLayout(SignupLocation);
