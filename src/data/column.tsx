import Button from "@mui/material/Button";
export const Columns = [
  {
    name: "TIMESTAMP",
    selector: (row) => row.TIMESTAMP,
    sortable: true,
  },
  {
    name: "PURCHASE ID",
    selector: (row) => row.PURCHASE_ID,
    sortable: true,
  },
  {
    name: "MAIL",
    selector: (row) => row.MAIL,
  },
  {
    name: "NAME",
    selector: (row) => row.NAME,
    sortable: true,
  },
  {
    name: "SOURCE",
    selector: (row) => row.SOURCE,
  },
  {
    name: "STATUS",
    selector: (row) => {
      if (row.STATUS === "FAILED")
        return (
          <div
            style={{
              backgroundColor: "#ffc9ea",
              padding: "4px 8px",
              textAlign: "center",
              borderRadius: "25px",
              width: "50px",
            }}
          >
            Failed
          </div>
        );
      else if (row.STATUS === "WAITING")
        return (
          <div
            style={{
              backgroundColor: "#fffaad",
              padding: "4px 8px",
              textAlign: "center",
              borderRadius: "25px",
              width: "50px",
            }}
          >
            Waiting
          </div>
        );
      else if (row.STATUS === "PAID")
        return (
          <div
            style={{
              backgroundColor: "#00fac4",
              padding: "4px 8px",
              textAlign: "center",
              borderRadius: "25px",
              width: "50px",
            }}
          >
            Paid
          </div>
        );
    },
  },
  {
    name: "SELECT",
    selector: (row) => (
      <Button
        style={{
          cursor: "pointer",
          backgroundColor: "#e4eced",
          textTransform: "capitalize",
          color: "black",
          fontWeight: 500,
          paddingTop: "2px",
          paddingBottom: "2px",
          borderRadius: "15px",
        }}
      >
        {row.SELECT}
      </Button>
    ),
  },
];
