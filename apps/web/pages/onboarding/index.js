import Head from "next/head";
import { useRouter } from "next/router";
import { Avatar, Button, Input, List, Select } from "ui";
import { withLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

function OnboardingKYC() {
  const router = useRouter();
  // Destructure the queries
  const {
    kyc,
    location,
    bags,
    bagSize,
    handbag,
    cleaningPref,
    pickupDate,
    final,
  } = router.query;

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

  const _bagList = [
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {typeof kyc !== "undefined" && (
        <main className={styles.main}>
          <h2>Tell us more about you</h2>
          <span>
            There are 892 people in your area using our app. Join them today
          </span>
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="First name"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="password"
            placeholder="Last name"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="email"
            placeholder="Email"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="Zip Code"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="Cell Phone Number"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="How did you hear about us?"
          />
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
            <Button
              className={styles.ghost_btn}
              size="large"
              style={{ flex: 1 }}
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              className={styles.normal_btn}
              size="large"
              style={{ flex: 2, marginLeft: 8 }}
              onClick={() => router.push("/onboarding/?location")}
            >
              Continue
            </Button>
          </div>
          <br />
          <span style={{ fontSize: 13 }}>
            By clicking this button, I agree to the{" "}
            <a href="#">Terms Of Service</a> and <a href="#">Privacy Policy</a>
          </span>
        </main>
      )}

      {typeof location !== "undefined" && (
        <main className={styles.main}>
          <h2>Location</h2>
          <span>Where will we be picking up and delivering from</span>
          <br />
          <Select
            placeholder="Location Type"
            size="large"
            className={styles.dropdown}
          >
            <Select.Option value="municipality">Municipality</Select.Option>
          </Select>
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="Address"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="Zip Code"
          />
          <br />
          <Input
            className={styles.textfield_rounded}
            size="large"
            type="text"
            placeholder="Where should our drivers pick up and Deliver your bags"
          />
          <br />
          <Select
            placeholder="Who are we serving?"
            size="large"
            className={styles.dropdown}
          >
            <Select.Option value="individual">Individual</Select.Option>
            <Select.Option value="company">Company</Select.Option>
          </Select>
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
            <Button
              className={styles.ghost_btn}
              size="large"
              style={{ flex: 1 }}
              onClick={() => router.back()}
            >
              Back
            </Button>
            <Button
              className={styles.normal_btn}
              size="large"
              style={{ flex: 2, marginLeft: 8 }}
              onClick={() => router.push("/onboarding/?bags")}
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
      )}

      {typeof bags !== "undefined" && (
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
            <Button
              className={styles.ghost_btn}
              size="large"
              style={{ flex: 1 }}
              onClick={() => router.back()}
            >
              Back
            </Button>
            <Button
              className={styles.normal_btn}
              size="large"
              style={{ flex: 2, marginLeft: 8 }}
              onClick={() => router.push("/onboarding/?bagSize")}
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
      )}

      {typeof bagSize !== "undefined" && (
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
              dataSource={_bagList}
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
            <Button
              className={styles.ghost_btn}
              size="large"
              style={{ flex: 1 }}
              onClick={() => router.back()}
            >
              Back
            </Button>
            <Button
              className={styles.normal_btn}
              size="large"
              style={{ flex: 2, marginLeft: 8 }}
              onClick={() => router.push("/onboarding/?handbag")}
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
      )}
    </div>
  );
}

export default withLayout(OnboardingKYC);
