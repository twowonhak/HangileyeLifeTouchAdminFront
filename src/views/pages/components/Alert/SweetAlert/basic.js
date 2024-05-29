import ReactBSAlert from "react-bootstrap-sweetalert";

export default function basic(setAlert, contents) {
  setAlert(
      <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="알림"
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          btnSize=""
          text="A few words about this sweet alert ..."
      >
        {contents}
      </ReactBSAlert>
  );
}