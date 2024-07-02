import ReactBSAlert from "react-bootstrap-sweetalert";

export default function warning(setAlert, contents) {

  setAlert(
      <ReactBSAlert
          warning
          style={{display: "block", marginTop: "-100px"}}
          title="정지"
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          confirmBtnBsStyle="warning"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}