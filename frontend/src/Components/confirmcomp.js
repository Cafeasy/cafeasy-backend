import "../Style/Confirmpage.css"
import { IoChevronBackCircleOutline, IoSearch } from "react-icons/io5";
import React from 'react'; 

const Confirmcomp = () => {

    return(
        <div className="konfirmasi-pesanan">
            <div className="logo-back">
                <h1><IoChevronBackCircleOutline/></h1>
            </div>

            <div>
                <button className="disable-button" disabled="true">KONFIRMASI PEMESANAN</button>
            </div>

            <div>
            <table>
                <tr className="text-ganti">
                <th>Ganti</th>
                </tr>

                <tr className="text-title1">
                <td>American waffle</td>
                </tr>
                
                <tr className="text-title2">
                <td>1x</td>
                </tr>
                
                <tr className="text-title3">
                <td>Rp 20.000,00</td>
                </tr>

                <tr className="text-title4">
                <th>Belgian waffle</th>
                </tr>

                <tr className="text-title5">
                <th>1x</th>
                </tr>

                <tr className="text-title6">
                <th>Rp 20.000,00</th>
                </tr>

                <tr className="text-title7">
                <th>Diskon</th>
                </tr>

                <tr className="text-title8">
                <th>(Rp 5.000,00)</th>
                </tr>

                <tr className="text-title9">
                <th>Sub Total</th>
                </tr>

                <tr className="text-title10">
                <th>Biaya Pelayanan</th>
                </tr>

                <tr className="text-title11">
                <th>Rp 2.000,00</th>
                </tr>

                <tr className="text-title12">
                <th>Take Away</th>
                </tr>

                <tr className="text-title13">
                <th>Rp 2.000,00</th>
                </tr>

                <tr className="text-title14">
                <th>Rp 25.000,00</th>
                </tr>

                <tr className="text-title15">
                <th>Total</th>
                </tr>

                <tr className="text-title16">
                <th>Rp 29.000,00</th>
                </tr>
                
            </table>
            </div>


{/*             <div className="textsatu">Ganti</div>
            <div className="textdua">American waffle</div>
            <div className="texttiga">1x</div>
            <div className="textempat">Rp 20.000,00</div>
            <div className="textlima">Belgian waffle</div>
            <div className="textenam">1x</div>
            <div className="texttujuh">Rp 20.000,00</div>
            <div className="textdelapan">Diskon</div>
            <div className="textsembilan">(Rp 5.000,00)</div>
            <div className="textsepuluh">Sub Total</div>
            <div className="textsebelas">Biaya Pelayanan</div>
            <div className="textduabelas">Rp 2.000,00</div>
            <div className="texttigabelas">Take Away</div>
            <div className="textempatbelas">Rp  25.000,00</div>
            <div className="textlimabelas">Rp 2.000,00</div>
            <div className="textenambelas">Total</div>
            <div className="texttujuhbelas">Rp 29.000,00</div>   */}
      

            <div>
                <button className="enable-button" disabled="true">Proses Pembayaran</button>
                <i></i>
            </div>
        
        </div>

    )
}

export default Confirmcomp