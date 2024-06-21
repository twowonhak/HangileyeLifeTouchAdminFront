import ReactBSAlert from "react-bootstrap-sweetalert";

export default function info(setAlert, contents, fun) {
  setAlert(
      <ReactBSAlert
          info
          style={{ display: "block", marginTop: "-100px" }}
          title="정보"
          onConfirm={() => fun === undefined ? setAlert(null) : fun()}
          onCancel={() => setAlert(null)}
          confirmBtnBsStyle="info"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}