import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ah902zo",
        "template_paast5w",
        form.current,
        "284dXTRC3WYmcbM_z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("문의되었습니다. 감사합니다");
          setTimeout(()=>{
            navigate("/curious");
          }, 200)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="input_form" ref={form} onSubmit={sendEmail}>
      <label>성 명</label>
      <input type="text" name="user_name" />
      <label>이 메 일</label>
      <input type="email" name="user_email" />
      <label>문의내용</label>
      <textarea
        placeholder="문의하실때 아래 내용을 적어주시면 더 자세한 답변을 받으실 수 있습니다.
        ----------------------------------------------------
        ▶지역:
        ▶이름(상호):
        ▶전화:
        ----------------------------------------------------
        ▶내용"
        name="message"
      />
      <input type="submit" value="문의하기" />
    </form>
  );
};

export default function Contact() {
  return (
    <div className="Contact_page">
      <ContactUs />
    </div>
  );
}
