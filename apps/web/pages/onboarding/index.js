import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  Image,
  Input,
  List,
  months,
  Row,
  ScheduleCalender,
  Select,
  Tabs,
  Timeline,
} from "ui";
import { useCustomRadioGroup } from "ui/hooks";
import { withLayout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

const { Panel } = Collapse;

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
  const detergentPrefList = [
    {
      title: "Scented",
      desc: "Scented, gain original: The cool, crisp scent of gain would leave your laundry smelling fresh and clean",
      url: "/blue_pickupbag.png",
    },
    {
      title: "Hypoallergenic",
      desc: "Rockin’ Green - Safe for the most sensitive skin, unscented, baby-safe and good for the environment",
      url: "/black_blue_pickupbags.png",
    },
  ];
  const softenerPrefList = [
    {
      title: "Downy Free & Gentle",
      desc: "This unscented fabric conditioner protects clothes from stretching. fading and fuzz - while adding softness",
      url: "/blue_pickupbag.png",
    },
    {
      title: "None",
      desc: "I don’t want fabric softener",
      url: "/black_blue_pickupbags.png",
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
      title: "10-bag bundle",
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
        <link rel="icon" href="/favicon.png" />
      </Head>

      {typeof kyc !== "undefined" && <KYC router={router} />}

      {typeof location !== "undefined" && <Location router={router} />}

      {typeof bags !== "undefined" && (
        <Bags router={router} bagList={bagList} />
      )}

      {typeof bagSize !== "undefined" && (
        <BagSize bagList={_bagList} router={router} />
      )}

      {typeof handbag !== "undefined" && <HandBag router={router} />}

      {typeof cleaningPref !== "undefined" && (
        <CleaningPref
          router={router}
          detergentPrefList={detergentPrefList}
          softenerPrefList={softenerPrefList}
        />
      )}

      {typeof pickupDate !== "undefined" && <PickupDate router={router} />}

      {typeof final !== "undefined" && <Final router={router} />}
    </div>
  );
}

const KYC = ({ router }) => {
  return (
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
        By clicking this button, I agree to the <a href="#">Terms Of Service</a>{" "}
        and <a href="#">Privacy Policy</a>
      </span>
    </main>
  );
};

const Location = ({ router }) => {
  return (
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
  );
};

const Bags = ({ bagList, router }) => {
  const [selected, setSelected] = useState(); //Store selected state
  // TODO: Use useEffect to load in initial selected state
  return (
    <main className={styles.main}>
      <h2>Bags</h2>
      <span>
        We’ll be dropping off bags prior to your first pickup Which bags are you
        interested in receiving in your Welcome Kit
      </span>
      <br />
      <div style={{ width: "100%", textAlign: "left" }}>
        <List
          itemLayout="horizontal"
          dataSource={bagList}
          renderItem={(item, index) => (
            <List.Item
              style={{
                border:
                  typeof selected !== "undefined" && selected === index
                    ? "1px solid rgba(6, 68, 162, 1)"
                    : "1px solid rgba(0,0,0,.1)",
                background:
                  typeof selected !== "undefined" && selected === index
                    ? "rgba(233, 242, 252, 1)"
                    : "rgba(255, 255, 255, 1)",
                marginBottom: 10,
                paddingLeft: 10,
                borderRadius: 5,
                lineHeight: -5,
              }}
              onClick={(e) => setSelected(index)}
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
  );
};

const BagSize = ({ bagList, router }) => {
  const [selected, setSelected] = useState(); //Store selected state
  // TODO: Use useEffect to load in initial selected state

  return (
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
          renderItem={(item, index) => (
            <List.Item
              style={{
                border:
                  typeof selected !== "undefined" && selected === index
                    ? "1px solid rgba(6, 68, 162, 1)"
                    : "1px solid rgba(0,0,0,.1)",
                background:
                  typeof selected !== "undefined" && selected === index
                    ? "rgba(233, 242, 252, 1)"
                    : "rgba(255, 255, 255, 1)",
                marginBottom: 10,
                paddingLeft: 10,
                borderRadius: 5,
                lineHeight: -5,
              }}
              onClick={(e) => setSelected(index)}
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
  );
};

const HandBag = ({ router }) => {
  const [currentVal, HandbagOptions] = useCustomRadioGroup(
    [
      {
        label: "No",
        value: "no",
      },
      {
        label: "Yes",
        value: "yes",
      },
    ],
    "no"
  );
  return (
    <main className={styles.main}>
      <h2>Would you like a wash & dry handbag</h2>
      <br />
      <Card
        hoverable={false}
        style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
        bodyStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src="/blue_pickupbag.png" width={100} style={{ flex: 1 }} />
        <div style={{ flex: 3, textAlign: "left" }}>
          <h4 style={{ margin: 0 }}>$10 flat rate</h4>
          <span>Holds 8-10 lbs. or 1 load</span>
          <br />
          <span>Bag Dimensions 14” x 18”</span>
        </div>
      </Card>
      <br />
      <span>
        <Link href="#">
          <a>Click here</a>
        </Link>{" "}
        to learn more about our hang dry service
      </span>
      <br />
      {/* UseCustom radio button selector */}
      {HandbagOptions()}
      <br />
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
          onClick={() => router.push("/onboarding/?cleaningPref")}
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
  );
};

const CleaningPref = ({ router, detergentPrefList, softenerPrefList }) => {
  const [selectedDetergentPref, setSelectedDetergentPref] = useState(); //Store selected state
  const [selectedSoftenerPref, setSelectedSoftenerPref] = useState(); //Store selected state
  // TODO: Use useEffect to load in initial selected state

  return (
    <main className={styles.main}>
      <h2>Select Wash, Dry, Fold cleaning Preferences</h2>
      <span>
        You can always update this at anytime on your online account for every
        order
      </span>
      <br />
      {/* Detergent list pref */}
      <div style={{ width: "100%", textAlign: "left" }}>
        <List
          header={<h3 style={{ textAlign: "center" }}>Detergent Preference</h3>}
          itemLayout="horizontal"
          dataSource={detergentPrefList}
          renderItem={(item, index) => (
            <List.Item
              style={{
                border:
                  typeof selectedDetergentPref !== "undefined" &&
                  selectedDetergentPref === index
                    ? "1px solid rgba(6, 68, 162, 1)"
                    : "1px solid rgba(0,0,0,.1)",
                background:
                  typeof selectedDetergentPref !== "undefined" &&
                  selectedDetergentPref === index
                    ? "rgba(233, 242, 252, 1)"
                    : "rgba(255, 255, 255, 1)",
                marginBottom: 10,
                paddingLeft: 10,
                borderRadius: 5,
                lineHeight: -5,
              }}
              onClick={(e) => setSelectedDetergentPref(index)}
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
      {/* Softener list pref */}
      <div style={{ width: "100%", textAlign: "left" }}>
        <List
          header={<h3 style={{ textAlign: "center" }}>Softener Preference</h3>}
          itemLayout="horizontal"
          dataSource={softenerPrefList}
          renderItem={(item, index) => (
            <List.Item
              style={{
                border:
                  typeof selectedSoftenerPref !== "undefined" &&
                  selectedSoftenerPref === index
                    ? "1px solid rgba(6, 68, 162, 1)"
                    : "1px solid rgba(0,0,0,.1)",
                background:
                  typeof selectedSoftenerPref !== "undefined" &&
                  selectedSoftenerPref === index
                    ? "rgba(233, 242, 252, 1)"
                    : "rgba(255, 255, 255, 1)",
                marginBottom: 10,
                paddingLeft: 10,
                borderRadius: 5,
                lineHeight: -5,
              }}
              onClick={(e) => setSelectedSoftenerPref(index)}
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
          onClick={() => router.push("/onboarding/?pickupDate")}
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
  );
};

const PickupDate = ({ router }) => {
  const [currentVal, PickupFrequencyOptions] = useCustomRadioGroup(
    [
      { label: "Weekly", value: "weekly" },
      { label: "Bi-Weekly", value: "bi-weekly" },
      { label: "One-time Pick Up", value: "otp" },
    ],
    "weekly"
  );
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  console.log(day, new Date().getDay(), "Day of the week");
  // TODO: Use useEffect to load in initial selected state

  return (
    <main className={styles.main}>
      <h2>When would you like your first pick up</h2>
      <span>
        Your welcome kit will be delivered the following business day after
        completing sign up
      </span>
      <br />

      <ScheduleCalender
        onDatePicked={(date) => {
          setDay(date.getDate());
          setMonth(date.getMonth());
        }}
        showHeader={true}
      />
      <span>*Pickups And Deliveries Are Monday- Friday Only</span>
      <br />

      <span style={{ textAlign: "center" }}>
        You have selected {months()[month]} the {day}. Would you like To create
        a recurring schedule or one-time pick up for now?
      </span>
      <br />
      {PickupFrequencyOptions()}
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
          onClick={() => router.push("/onboarding/?final")}
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
  );
};

const Final = ({ router }) => {
  const [tabKey, setTabKey] = useState("1");

  return (
    <main className={styles.main}>
      <div style={{ width: "100%" }}>
        <Tabs
          // defaultActiveKey={tabKey}
          activeKey={tabKey}
          onChange={(key) => setTabKey(key)}
        >
          <Tabs.TabPane key="1" tab="Billing" disabled={tabKey !== "1"}>
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Input.Group size="large">
                <Row style={{ width: "100%", margin: 0, padding: 0 }}>
                  <Col span={13}>
                    <Input
                      className={styles.no_textfield_hover_style}
                      style={{
                        borderRight: 0,
                        textAlign: "left",
                        borderTopLeftRadius: "25pt",
                        borderBottomLeftRadius: "25pt",
                        // background: "#F5F5FB",
                        outline: 0,
                      }}
                      size="large"
                      type="text"
                      placeholder="Card Number"
                    />
                  </Col>
                  <Col span={7}>
                    <Input
                      className={styles.no_textfield_hover_style}
                      style={{
                        borderRight: 0,
                        borderLeft: 0,
                        textAlign: "left",
                        outline: 0,
                      }}
                      size="large"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </Col>
                  <Col span={4}>
                    <Input
                      className={styles.no_textfield_hover_style}
                      style={{
                        borderLeft: 0,
                        textAlign: "left",
                        borderTopRightRadius: "25pt",
                        borderBottomRightRadius: "25pt",
                        outline: 0,
                      }}
                      size="large"
                      type="text"
                      placeholder="CVC"
                    />
                  </Col>
                </Row>
              </Input.Group>
              <br />
              <Input
                className={styles.textfield_rounded}
                size="large"
                type="text"
                placeholder="Create Password"
              />
              <br />
              <Input
                className={styles.textfield_rounded}
                size="large"
                type="text"
                placeholder="Promo or Referral Code"
                suffix={
                  <Button
                    className={styles.normal_btn}
                    size="middle"
                    onClick={() => {}}
                  >
                    Apply
                  </Button>
                }
              />
              <br />
              <Input
                className={styles.textfield_rounded}
                size="large"
                type="text"
                placeholder="Gift Card Code"
                suffix={
                  <Button
                    className={styles.normal_btn}
                    size="middle"
                    onClick={() => {}}
                  >
                    Apply
                  </Button>
                }
              />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Summary" disabled={tabKey !== "2"}>
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition="end"
            >
              <Panel header="My Welcome Kit" key="1">
                Lorem ipsum
              </Panel>
              <Panel header="My Preferences" key="2">
                Lorem ipsum
              </Panel>
              <Panel header="My Pricing" key="3">
                Lorem ipsum
              </Panel>
              <Panel header="My Schedule" key="4">
                Lorem ipsum
              </Panel>
            </Collapse>
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Rewards" disabled={tabKey !== "3"}>
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h2>Rewards</h2>
              <span>Easy to earn. Easy to Redeem, Easy to love</span>
              <br />
              <br />
              <Timeline>
                <Timeline.Item color="#0644A2">
                  <p style={{ textAlign: "left" }}>
                    Earn 2 points for every N500 spent. Points never expire
                  </p>
                </Timeline.Item>
                <Timeline.Item color="#0690A2">
                  <p style={{ textAlign: "left" }}>
                    Unlock members-only offers Including free services and more
                  </p>
                </Timeline.Item>
                <Timeline.Item color="#D0588A">
                  <p style={{ textAlign: "left" }}>
                    Automatically redeem N3000 for every 500 Points earned
                  </p>
                </Timeline.Item>
              </Timeline>
              <br />
              <Checkbox onChange={(e) => console.log(e.target.checked)}>
                Enroll me in the free rewards program
              </Checkbox>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <br />
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
          onClick={() => {
            if (tabKey === "1") {
              router.back();
            } else {
              tabKey === "3"
                ? setTabKey("2")
                : tabKey === "2"
                ? setTabKey("1")
                : null;
            }
          }}
        >
          Back
        </Button>
        <Button
          className={styles.normal_btn}
          size="large"
          style={{ flex: 2, marginLeft: 8 }}
          onClick={() => {
            if (tabKey === "3") {
              router.push("/home/");
            } else {
              tabKey === "1"
                ? setTabKey("2")
                : tabKey === "2"
                ? setTabKey("3")
                : null;
            }
          }}
        >
          {tabKey === "3" ? "Complete" : "Continue"}
        </Button>
      </div>
      <style jsx global>{`
        .ant-input,
        .ant-input-lg {
          background: #0a0a0a0f;
        }
      `}</style>
    </main>
  );
};

export default withLayout(OnboardingKYC);
