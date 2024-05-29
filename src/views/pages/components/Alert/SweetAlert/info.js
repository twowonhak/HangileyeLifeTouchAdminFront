import ReactBSAlert from "react-bootstrap-sweetalert";

export default function info(setAlert, contents) {
  setAlert(
      <ReactBSAlert
          info
          style={{ display: "block", marginTop: "-100px" }}
          title="정보"
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          confirmBtnBsStyle="info"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}