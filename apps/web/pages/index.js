import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Image, Input } from "ui";
import { withLayout } from "../components/Layout";
import { MAIN_URL } from "../lib/global";
import styles from "../styles/Home.module.css";

function Index({ user }) {
  const router = useRouter();
  // const { data: session, status } = useSession();

  // Destructure the queries
  const { signup, login, email } = router.query;

  useEffect(() => {
    // Check if the users session is signed in
    console.log(user, "Users session data");
    if (user) {
      console.log(user, "Users session data");
      return router.push("/home/");
      // And maybe redirect to the home page
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Net Laundro - Get started</title>
        <meta
          name="description"
          content="Net Laundro, laundry services, pickups, schedule"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {typeof signup === "undefined" && typeof login === "undefined" && (
        <main className={styles.main}>
          <Image
            src="/landing_img.png"
            width={360}
            preview={true}
            rel="Login image"
          />
          <br />
          <h2 className="text-2xl text-black font-bold">
            Schedule & Manage Pickups
          </h2>
          <span className="text-md font-normal">
            Schedule one-time pickups or create a Recurring schedule. Add
            cleaning notes. Change Delivery locations and payment methods Or
            even reschedule with one tap
          </span>
          <br />
          <br />
          <Button
            type="ghost"
            className={styles.ghost_btn}
            size="large"
            block
            onClick={() => router.push("/?login")}
          >
            Log in Via SMS
          </Button>
          <br />
          <Button
            // href="/api/auth/signin"
            type="primary"
            className={styles.normal_btn}
            size="large"
            block
            onClick={(e) => {
              // Call the next auth gmail login function
              e.preventDefault();
              signIn("google", { callbackUrl: `${MAIN_URL}/home/` });
            }}
          >
            Log in Via Gmail
          </Button>
        </main>
      )}

      {typeof signup !== "undefined" && <Signup router={router} />}

      {typeof login !== "undefined" && <Login router={router} />}
    </div>
  );
}

const Signup = ({ router }) => (
  <main className={styles.main}>
    <h2>Get Started</h2>
    <span>Enter your details to get started</span>
    <br />
    <Input
      className={styles.textfield_rounded}
      size="large"
      type="text"
      placeholder="Phone number"
    />
    <br />
    <Input
      className={styles.textfield_rounded}
      size="large"
      type="password"
      placeholder="Password"
    />
    <br />
    <br />
    <Button
      className={styles.normal_btn}
      size="large"
      block
      onClick={() => {
        // Collect users data and direct to onboarding process
        router.push("/onboarding/?kyc");
      }}
    >
      Get Started
    </Button>
    <br />
    <span>
      Already have an account?{" "}
      <Link href="/?login" passHref>
        <a>Login</a>
      </Link>
    </span>
  </main>
);

const Login = ({ router }) => (
  <main className={styles.main}>
    <h2>Welcome Back</h2>
    <span>Enter your details to review and/or schedule your next pickup</span>
    <br />
    <Input
      className={styles.textfield_rounded}
      size="large"
      type="text"
      placeholder="Phone number"
    />
    <br />
    <Input
      className={styles.textfield_rounded}
      size="large"
      type="password"
      placeholder="Password"
    />
    <br />
    <br />
    <Button
      className={styles.normal_btn}
      size="large"
      block
      onClick={() => {
        // Collect users data and direct to home page
        router.push("/home/");
      }}
    >
      Log me in
    </Button>
    <br />
    <span>
      Don’t have an account?{" "}
      <Link href="/?signup" passHref>
        <a>Sign Up</a>
      </Link>
    </span>
  </main>
);

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  console.log(session, "Server side session");

  if (!session) return { props: {} };

  const { user } = session;
  return {
    props: {
      user,
    },
  };
};

export default withLayout(Index);
