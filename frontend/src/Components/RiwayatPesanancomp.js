import "../Style/Confirmpage.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgArrowLeftO } from "react-icons/cg";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

import axios from "axios";
const Riwayatpesanancomp = (props) => {
  const menus = props.menu;
  const location = useLocation();
  const { url } = location.state;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [riwayat, setRiwayat] = useState([]);
  useEffect(() => {
    axios
      .get(` ${process.env.REACT_APP_API_URL}/getAllTransaksi/` + url)
      .then((result) => {
        setRiwayat(result.data);
      })
      .catch((error) => console.log(error));
  }, [riwayat]);

  const [message, setMessage] = useState();
  const [idtransaksi, idTransaksi] = useState();
  const handleClick = (value) => {
    setMessage(value);
  };
  const [transaksi, setTransaksi] = useState();

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/getDetailTransaksi/` +
          url +
          "/" +
          message
      )
      .then((response) => {
        setTransaksi(response.data);
      });
  }, [transaksi]);
  // console.log(transaksi?.data[0]?.dataPesanan);
  let isitransaksi = transaksi?.data[0];

  return (
    <div className="App">
      <br></br>
      <br></br>
      <div>
        <br></br>
        <div class="d-grid  col-9 mx-auto mt-6">
          <button
            type="submit"
            className="button-konfir-pesanan"
            disabled="true"
          >
            RIWAYAT PESANAN
          </button>
        </div>
      </div>

      {riwayat.data?.map((d, index) => {
        return (
          <>
            <div
              class="card mx-4"
              style={{ textAlign: "left", marginBottom: "5px" }}
            >
              <div class="col-md-4">
                <div class="card-body">
                  <h5 class="card-title">Meja no : {d.noMeja}</h5>

                  <p class="card-text">
                    <small class="text-muted">{d.tanggal}</small>
                  </p>

                  <p class="card-text">
                    <small class="text-muted">{d.idTransaksi}</small>
                  </p>
                  {/* {d.dataPesanan.map((d, index) => {
                    return (
                      <>
                        <div>halo</div>
                      </>
                    );
                  })} */}

                  {/* <button
                    onClick={() => {
                      handleClick(d.idTransaksi);
                    }}
                  >
                    Update
                  </button> */}

                  <Modaltransaksi
                    value={d}
                    handleShow={handleShow}
                    show={show}
                    handleClose={handleClose}
                    riwayat={riwayat}
                    idtransaksi={transaksi.idTransaksi}
                    handleClick={handleClick}
                    isitransaksi={isitransaksi}
                  ></Modaltransaksi>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div>
        <br></br>
        <Link to={`/Berandapage/${url}`}>
          <button className="button-proses-pembayaran">Kembali</button>
        </Link>
      </div>
    </div>
  );
};

export default Riwayatpesanancomp;

export const Modaltransaksi = ({
  value,
  handleShow,
  show,
  handleClose,
  riwayat,
  idtransaksi,
  handleClick,
  isitransaksi,
}) => {
  return (
    <>
      {" "}
      <Button
        className="nextButton"
        onClick={() => {
          handleClick(value.idTransaksi);
          handleShow();
        }}
      >
        Detail
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title class="modal-title w-100 text-center">
            <h3>Riwayat Transaksi</h3>
          </Modal.Title>
        </Modal.Header>
        <div className="">
          <table class="table table-borderless">
            {/* {riwayat.data?.map((d, index) => {
              return (
                <>
                  <div>ha</div>
                  {d.dataPesanan.map((d, index) => {
                    console.log(d);
                    return (
                      <>
                        <div>halo</div>
                      </>
                    );
                  })}
                </>
              );
            })} */}

            {isitransaksi?.dataPesanan.map((d, index) => {
              return (
                <>
                  <table class="table table-borderless"></table>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>{d.namaMenu}</td>
                      <td>{d.qty}x</td>
                      <td>{d.hargaMenu}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>

        <br></br>
        <div class="modal-footer border-0">{isitransaksi?.totalHarga}</div>
        <Modal.Footer>
          {/* <div>
            <a>Transfer Ke bank BCA</a>
            <p>PT. Cafeasy</p>
            <p>98123819238912391</p>
          </div> */}
          {/* <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
