"use client";

import { Flex, Input, Button } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./auth-form.module.scss";
import Image from "next/image";
import { generateRandomCode, validateEmail } from "components/utils/functions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/slices/auth.slice";
import { useRouter } from "next/navigation";

const CODE_LENGTH = 6;

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [isEmailInvalid, setIsEmailInvalid] = useState("");
  const [isCodeInvalid, setIsCodeInvalid] = useState("");
  const [isLodaing, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    code: [] as string[],
  });
  const [code, setCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setIsEmailInvalid("");
    setFormData((prev) => ({
      ...prev,
      email: value.trim(),
    }));
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) return;

    if (!validateEmail(formData.email)) {
      setIsEmailInvalid("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    const randomCode = generateRandomCode();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          to_email: formData.email,
          user_email: process.env.NEXT_PUBLIC_EMAILJS_EMAIL!,
          message: "Authorization request",
          code: randomCode,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsLoading(false);
          setCode(randomCode);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
          alert("Ошибка отправки!");
        }
      );
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.email !== "" && formData.code.join("") === code) {
      setIsLoading(false);
      const mockUser = {
        id: "1",
        email: formData.email,
        name: "Hanzo Hasashi",
        avatar: "/assets/images/scorpion.jpg",
      };

      dispatch(
        login({
          user: mockUser,
          token: "your-auth-token-here",
        })
      );
    } else {
      setIsCodeInvalid("invalid code");
      setIsLoading(false);
    }
  };

  function onInput(valueArray: string[]) {
    setFormData((prev) => ({
      ...prev,
      code: valueArray,
    }));
    setIsCodeInvalid("");("");
  }

  const sharedProps = {
    onInput,
  };

  return (
    <div className={styles.form_wrapper}>
      <Image
        width={150}
        height={150}
        src={"/assets/images/svg/logo.svg"}
        className={styles.form_wrapper__logo}
        alt="logo"
      />
      <p className={styles.form_wrapper__heading}>
        {code
          ? "Check your email address and enter the code you sent"
          : "Enter your email address to continue"}
      </p>

      <form className={styles.form} onSubmit={code ? handleLogin : sendEmail}>
        <Flex vertical gap="middle" style={{ width: "100%" }}>
          <div className={styles.input_groupe}>
            <Input
              name="email"
              placeholder="Email"
              prefix={<UserOutlined className={styles.form__input_icon} />}
              value={formData.email}
              status={isEmailInvalid && "error"}
              onChange={handleChangeEmail}
              className={styles.form__input}
              disabled={isLodaing || code !== ""}
            />
            {code && (
              <Input.OTP
                value={formData.code.join("")}
                length={CODE_LENGTH}
                type="number"
                className={styles.form__input_otp}
                status={isCodeInvalid && "error"}
                disabled={isLodaing}
                {...sharedProps}
              />
            )}
            {isEmailInvalid && (
              <p className={styles.form__input_invalid}>{isEmailInvalid}</p>
            )}
            {isCodeInvalid && (
              <p className={styles.form__input_invalid}>{isCodeInvalid}</p>
            )}
          </div>
          <Button
            size="large"
            type="primary"
            disabled={
              !formData.email ||
              isEmailInvalid !== "" ||
              isCodeInvalid !== "" ||
              (formData.email != "" &&
                code != "" &&
                formData.code.join("").length < CODE_LENGTH)
            }
            htmlType="submit"
            className={styles.form__button}
          >
            {isLodaing ? (
              <LoadingOutlined className="loading-icon" />
            ) : code !== "" ? (
              "Login"
            ) : (
              "Next"
            )}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default AuthForm;
