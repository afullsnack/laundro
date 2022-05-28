import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Input, Select } from "ui";
import { withLayout } from "../components/Layout";
import styles from "../styles/Home.module.css";

function SignupLocation() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Location</title>
        <meta name="description" content="Sign up to create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Button className={styles.ghost_btn} size="large" style={{ flex: 1 }}>
            Back
          </Button>
          <Button
            className={styles.normal_btn}
            size="large"
            style={{ flex: 2, marginLeft: 8 }}
            onClick={() => router.push("/signup_4")}
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
