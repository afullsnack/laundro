import Head from "next/head";
import { useRouter } from "next/router";
import { Avatar, Button, List, withLayout } from "ui";
import styles from "../styles/Home.module.css";

const bagList = [
  {
    title: "Wash, Dry, Fold",
    desc: "Items would be sorted, spot-treated, washed, dried and perfectly folded",
    url: "/blue_pickupbag.png",
  },
  {
    title: "Both",
    desc: "Wash, dry,fold and dry cleaning",
    url: "/black_blue_pickupbags.png",
  },
  {
    title: "Dry Cleaning",
    desc: "Items would be dry cleaned, laundered & pressed according to the care label and returned on hangers",
    url: "/black_pickupbag.png",
  },
];

function SignupLocation() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery Bags</title>
        <meta name="description" content="Sign up to create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Bags</h2>
        <span>
          We’ll be dropping off bags prior to your first pickup Which bags are
          you interested in receiving in your Welcome Kit
        </span>
        <br />
        <div style={{ width: "100%", textAlign: "left" }}>
          <List
            itemLayout="horizontal"
            dataSource={bagList}
            renderItem={(item, index) => (
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
                    <small style={{ lineHeight: -5 }}>{item.desc}</small>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <br />
        <span style={{ fontSize: 13 }}>
          *These bags are yours to keep and are completely free
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
            onClick={() => router.push("/signup_5")}
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
