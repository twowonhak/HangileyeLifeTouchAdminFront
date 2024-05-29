import ReactBSAlert from "react-bootstrap-sweetalert";

export default function question(setAlert, contents) {
  setAlert(
      <ReactBSAlert
          custom
          style={{ display: "block", marginTop: "-100px" }}
          title="질문"
          customIcon={
            <div
                className="swal2-icon swal2-question swal2-animate-question-icon"
                style={{ display: "flex" }}
            >
              <span className="swal2-icon-text">?</span>
            </div>
          }
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          confirmBtnBsStyle="default"
          confirmBtnText="Ok"
          btnSize=""
      >
        {contents}
      </ReactBSAlert>
  );
}