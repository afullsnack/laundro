import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Input } from "ui";
import { withLayout } from "../components/Layout";
import styles from "../styles/Home.module.css";

function Signup() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up to create a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Button className={styles.ghost_btn} size="large" style={{ flex: 1 }}>
            Cancel
          </Button>
          <Button
            className={styles.normal_btn}
            size="large"
            style={{ flex: 2, marginLeft: 8 }}
            onClick={() => router.push("/signup_3")}
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
    </div>
  );
}

export default withLayout(Signup);
