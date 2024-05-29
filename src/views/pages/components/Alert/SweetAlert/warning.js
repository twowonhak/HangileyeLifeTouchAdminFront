import ReactBSAlert from "react-bootstrap-sweetalert";

export default function warning(setIsAlertOpen, contents) {
  setIsAlertOpen(
      <ReactBSAlert
          warning
          style={{display: "block", marginTop: "-100px"}}
          title="정지"
          onConfirm={() => setIsAlertOpen(null)}
          onCancel={() => setIsAlertOpen(null)}
          confirmBtnBsStyle="warning"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}