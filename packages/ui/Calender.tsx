import { Calendar, Card } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

export const ScheduleCalender = ({
  onDatePicked,
  showHeader = true,
  date = undefined,
}: any) => {
  console.log(date, "From comp");
  const onPanelChange = (value: any, mode: any) => {
    console.log(value, mode);
  };

  const onSelect = (date: any) => {
    console.log(
      date?._d.getDay(),
      moment.weekdays()[date?._d.getDay()],
      "Date selected"
    );
    onDatePicked(date?._d);
  };

  const [defaultDate, setDefaultDate] = useState<moment.Moment | any>(
    date ? moment.unix(date) : moment.now()
  );

  useEffect(() => {
    // Effect to set default date on component render @Param: (moment object)

    if (!date) {
      console.log("Hit default");
      setDefaultDate(moment.now());
    } else {
      console.log("Hit date");
      setDefaultDate(moment.unix(date).millisecond());
    }
    return () => {};
  }, [moment, date]);

  return (
    <Card style={{ borderRadius: 30 }}>
      <Calendar
        fullscreen={false}
        defaultValue={defaultDate}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
        mode="month"
        headerRender={({ value, type, onChange, onTypeChange }) =>
          showHeader ? (
            <h3
              style={{
                margin: 0,
                textAlign: "center",
                color: "rgba(9, 32, 88, 1)",
              }}
            >
              {moment.months()[value.month()]}
            </h3>
          ) : null
        }
      />
    </Card>
  );
};
