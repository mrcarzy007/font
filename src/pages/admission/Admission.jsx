// const imageMimeType = /image\/(png|jpg|jpeg)/i;
import Header from "../../components/Header";
import HeaderImage from "../../images/admissionHeaderimg.jpg";
import styles from "./Admission.module.css";
import LOGO from "../../../public/Logo.png";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
const Admission = () => {
  // const { register, handleSubmit } = useForm("");
  // const [data, setData] = useState("");
  // const submit = (data) => console.log(data);

  return (
    <>
      <Header title="Admssion" image={HeaderImage}></Header>
      <form
        action="#"
        method="POST"
        // onSubmit={handleSubmit(submit)}
        className={styles.formContainer}
      >
        <div className={styles.subContainer}>
          <a href="#" className={styles.Schlogo}>
            <img src={LOGO} alt="School Logo" />
          </a>
          <div className={styles.SchName}>
            <h1>ANKUR SCHOOL</h1>
          </div>
          b{" "}
        </div>
        <div className={styles.SchAddress}>
          <p>Admin. Office: Qr. No 1C - 185. B.S City, Jharkhand</p>
          <p>School Campus- Capm 2, Bokaro</p>
        </div>
        <div className={styles.SchOffce}>
          <div className={styles.SchReg}>
            <small>FOR OFFICE USE ONLY</small>
            <p>Reg.No.:________________</p>
            <p>Reg. Date:___/____/____</p>
            <p>Fee:____Receipt:_____</p>
          </div>
          <div className={styles.SchRegname}>ADMISSION FROM</div>
        </div>
        <div className={styles.SchHeader}>Registration From</div>
        <div className={styles.form}>
          <div className={styles.formControler}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              // {...register("fname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mName">Middle Name</label>

            <input type="text" name="mName" id="mName" />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              // {...register("lname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="date">Date of birth</label>
            <input
              type="date"
              name="date"
              id="date"
              // {...register("date", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="aClass">Admitting in Class</label>
            <input
              type="text"
              name="aClass"
              id="aClass"
              // {...register("aClass", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="tounge">Mother Tounge</label>
            <input
              type="text"
              name="tounge"
              id="tounge"
              // {...register("tounge", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="religion">Religion</label>
            <input
              type="text"
              name="religion"
              id="religion"
              // {...register("religion", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="Aadhar">Aadhar No:</label>
            <input
              type="number"
              name="Aadhar"
              id="Aadhar"
              // {...register("Aadhar", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              // {...register("category", { required: true })}
            />
          </div>

          <div className={styles.formControler}>
            <label htmlFor="ffname">Father's First Name</label>
            <input
              type="text"
              name="ffname"
              id="ffname"
              // {...register("ffname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="flname">Father's Last Name</label>
            <input
              type="text"
              name="flname"
              id="flname"
              // {...register("flname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="fqualification">Qualification:</label>
            <input
              type="text"
              name="fqualification"
              id="fqualification"
              // {...register("fqualification", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="foccupation">Occupation:</label>
            <input
              type="text"
              name="foccupation"
              id="foccupation"
              // {...register("foccupation", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="fphone">Phone</label>
            <input
              type="number"
              name="fphone"
              id="fphone"
              // {...register("fphone", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="frAadhar">Aadhar No:</label>
            <input
              type="number"
              name="frAadhar"
              id="frAadhar"
              // {...register("frAadhar", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mfname">Mother's First Name</label>
            <input
              type="text"
              name="mfname"
              id="mfname"
              // {...register("mfname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mlname">Mother's Aadhar Last Name</label>

            <input
              type="text"
              name="mlname"
              id="mlname"
              // {...register("mlname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mqulification">Qulification:</label>
            <input
              type="text"
              name="mqulification"
              id="mqulification"
              // {...register("mqulification", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="moccupation">Occupation:</label>
            <input
              type="text"
              name="moccupation"
              id="moccupation"
              // {...register("moccupation", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mphone">Phone</label>
            <input
              type="number"
              name="mphone"
              id="mphone"
              // {...register("mphone", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="mAadhar">Aadhar No:</label>
            <input
              type="number"
              name="mAadhar"
              id="mAadhar"
              // {...register("fname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="locname">Local Guadian's First Name:</label>
            <input
              type="text"
              name="locname"
              id="locname"
              // {...register("locname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="loclname">Local Guadian's Last Name:</label>
            <input
              type="text"
              name="loclname"
              id="loclname"
              // {...register("loclname", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="locphone">Phone No:</label>
            <input
              type="number"
              name="locphone"
              id="locphone"
              // {...register("locphone", { required: true })}
            />
          </div>
          <div className={styles.formControler}>
            <label htmlFor="caddress">Current Address:</label>
            <textarea
              name="caddress"
              id="caddress"
              cols="30"
              rows="10"
              // {...register("caddress", { required: true })}
            ></textarea>
          </div>
          <div className={styles.formControler}>
            <label htmlFor="paddress">Permanent Address:</label>
            <textarea
              name="paddress"
              id="paddress"
              cols="30"
              rows="10"
              // {...register("paddress", { required: true })}
            ></textarea>
          </div>
        </div>
        <hr className={styles.oneLine} />
        <div className={styles.ackow}>
          <h3>Acknowledgement</h3>
          <p>
            I hereby certify all of the information provided by me in this
            application(or any other accompanying or required documents) is
            correct, accurate and complete to the best of my knowledge
          </p>
        </div>
        <div className={styles.attach}>
          <p>Please Attach:</p>
          <ol className={styles.list}>
            <li>Aadhar Cards Of Father & Mother</li>
            <li>Aadhar Card Of Candidate</li>
            <li>Birth Certificate Of Candidate</li>
            <li>
              Transfer Certificate & Progress Report (Form The Previous School)
            </li>
          </ol>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Admission;
