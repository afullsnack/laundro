import { Button, UserAddOutlined } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button children={'CLICK ME'} icon={<UserAddOutlined style={{ color: "red" }} />}  type="ghost" size="large" />
    </div>
  );
}
