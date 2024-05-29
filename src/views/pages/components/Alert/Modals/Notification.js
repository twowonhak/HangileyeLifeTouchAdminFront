import {Button, Modal} from "reactstrap";
import React from "react";

export default function NotificationAlert({type, setIsModalOpen, title, contents, onClickFun}) {

  /**
   *  danger : 주황
   *  primary : 블루
   *  info : 하늘
   *  success : 초록
   */


  // if (!isModalOpen)
  //   return null;
  // else
    return (
        <>
          <Modal
              className={`modal-dialog-centered modal-` + type}
              contentClassName={`bg-gradient-` + type}
              isOpen={true}
              toggle={() => setIsModalOpen(false)}
          >
            <div className="modal-header">
              <h6
                  className="modal-title"
                  id="modal-title-notification"
              >
                {/*Your attention is required*/}
              </h6>
              <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-3 text-center">
                <i className="ni ni-bell-55 ni-3x"/>
                <h4 className="heading mt-4">
                  {title}
                </h4>
                <p>
                  {contents}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                  className="btn-white"
                  color="default"
                  type="button"
                  onClick={onClickFun}
              >
                계속 진행
              </Button>
              <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
              >
                취소
              </Button>
            </div>
          </Modal>
        </>
    )
}