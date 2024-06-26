import ReactBSAlert from "react-bootstrap-sweetalert";

export default function warning(setIsOpenAlert, contents) {

  setIsOpenAlert(
      <ReactBSAlert
          warning
          style={{display: "block", marginTop: "-100px"}}
          title="정지"
          onConfirm={() => setIsOpenAlert(null)}
          onCancel={() => setIsOpenAlert(null)}
          confirmBtnBsStyle="warning"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}