import moment from "moment";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueries, useQueryClient } from "react-query";
import { Avatar, Button, Card, Col, Input, Row } from "ui";
import { withUserLayout } from "../../components/Layout";
import { getPickups } from "../../lib/query";
import styles from "../../styles/Home.module.css";

function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const { data: session, status } = useSession();

  // Setup query to get pickups and schedules
  const queryClient = useQueryClient();
  const [{ isLoading, data: pickups }] = useQueries([
    {
      queryKey: ["getPickups", session?.jwt],
      queryFn: () => getPickups({ token: session?.jwt }),
      onSuccess(data) {
        console.log(data, "Data from fetching pickups");
      },
      onError(err) {
        console.error(err, "An error occurred while fetching  pickups");
      },
    },
  ]);

  useEffect(() => {
    console.log(session, session?.jwt, status);
    if (status === "authenticated") {
      const { user } = session;
      if (typeof user !== "undefined") setUserData(user);
      queryClient.invalidateQueries("getPickups");
    }
  }, [status]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Users profile home</title>
        <meta name="description" content="User schedule dashboard" />
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
            xs={{ span: 18 }}
            lg={{ span: 12 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>
              Hi {userData?.firstName || userData?.fullName}
            </h2>
            <span>Glad to have you back</span>
          </Col>
          <Col
            xs={{ span: 6 }}
            lg={{ span: 12 }}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={userData?.image || userData?.picture}
              shape="circle"
              size="100%"
            />
          </Col>
          <Col span={24}>
            <Card style={{ borderRadius: 5 }}>
              {typeof pickups === null ||
                (pickups?.data?.length <= 0 && (
                  <>
                    <h3 style={{ margin: 0, fontWeight: "bold" }}>
                      No Pickup Scheduled
                    </h3>
                    <br />
                    <span>
                      Looks like you don’t have a pick up scheduled. Schedule
                      one now
                    </span>
                    <br />
                    <br />
                    <Button
                      className={styles.normal_btn}
                      size="large"
                      onClick={() => router.push("/pickups/scheduler")}
                    >
                      Schedule Pick Up
                    </Button>
                  </>
                ))}
            </Card>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <h4 style={{ margin: 0, fontWeight: "bold" }}>One & Done</h4>
            <span>Select your next pickup date</span>
          </Col>
          <Col span={8}>
            <Card
              style={{ borderRadius: 5 }}
              hoverable
              onClick={(e) =>
                router.push(
                  `/pickups/scheduler?date=${moment().add(1, "days")}`
                )
              }
            >
              <span>{moment(moment().add(1, "days"), "M").format("MMM")}</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {moment(moment().day() + 1, "d").format("DD")}
              </h3>
              <span>{moment().year()}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ borderRadius: 5 }}
              hoverable
              onClick={(e) =>
                router.push(
                  `/pickups/scheduler?date=${moment().add(2, "days")}`
                )
              }
            >
              <span>{moment(moment().add(2, "days"), "M").format("MMM")}</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {moment(moment().add(2, "days"), "d").format("DD")}
              </h3>
              <span>{moment().year()}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ borderRadius: 5 }}
              hoverable
              onClick={(e) =>
                router.push(
                  `/pickups/scheduler?date=${moment().add(3, "days")}`
                )
              }
            >
              <span>{moment(moment().add(3, "days"), "M").format("MMM")}</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {moment(moment().add(3, "days"), "d").format("DD")}
              </h3>
              <span>{moment().year()}</span>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title={<h4 style={{ margin: 0, textAlign: "left" }}>Wallet</h4>}
              extra={
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <h3 style={{ margin: 0 }}>N0.00</h3>
                  <span style={{ fontSize: ".8rem", color: "rgba(0,0,0,.45)" }}>
                    Credit Balance
                  </span>
                </div>
              }
              style={{ borderRadius: 5 }}
            >
              {/* <span>Oct</span>
              <br />
              <h3 style={{ margin: 0, fontWeight: "bold" }}>28</h3>
              <span>2021</span> */}
              <h3 style={{ textAlign: "left" }}>Have a promo code</h3>
              <Input
                // size="default"
                suffix={<Button className={styles.normal_btn}>Apply</Button>}
                className={styles.textfield_rounded}
                placeholder="Enter promo code"
              />
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default withUserLayout(Home);

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   console.log(session, "Server side session");

//   if (!session) return { props: {} };

//   const { user, jwt } = session;
//   return {
//     props: {
//       user,
//       jwt,
//     },
//   };
// };
