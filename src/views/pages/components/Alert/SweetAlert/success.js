import ReactBSAlert from "react-bootstrap-sweetalert";

export default function success(setAlert, contents, setFun) {
  setAlert(
      <ReactBSAlert
          success
          style={{display: "block", marginTop: "-100px"}}
          title="성공"
          onConfirm={() => setFun === undefined ? setAlert(null) : setFun()}
          onCancel={() => {
            setAlert(null)
            setFun()
          }}
          confirmBtnBsStyle="success"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}