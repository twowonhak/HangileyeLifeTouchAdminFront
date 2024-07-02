import ReactBSAlert from "react-bootstrap-sweetalert";

export default function loginWarning(setAlert,navigate) {


  setAlert(
      <ReactBSAlert
          warning
          style={{display: "block", marginTop: "-100px"}}
          title="정지"
          onConfirm={() => navigate('/')}
          onCancel={() => navigate('/')}
          confirmBtnBsStyle="warning"
          confirmBtnText="Ok"
          btnSize=""
      >
        로그인 정보가 만료 혹은 없습니다. 다시 로그인 해주세요.
      </ReactBSAlert>
  );
}