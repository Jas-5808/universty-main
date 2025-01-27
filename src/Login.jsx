import React, { useState } from "react";
import axios from "axios";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("student");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const chaskForm = (event) => {
    setType(event.currentTarget.id);
  };

  const fetchUserInfo = async (accessToken) => {
    try {
      const response = await axios.get(
        "http://37.140.216.178/api/v1/users/userinfo/",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        localStorage.setItem("loggedInUser", JSON.stringify(response.data[0]));
      }
    } catch (error) {
      console.error("Ошибка получения информации о пользователе:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://37.140.216.178/api/v1/users/login/",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const { access_token, refresh_token } = response.data;

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);

        await fetchUserInfo(access_token);

        setMessage("Вы успешно вошли.");
        navigate("/shop");
      } else {
        setMessage("Ошибка при попытке войти.");
        clearMessage();
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setMessage("Сетевая ошибка. Попробуйте снова.");
      clearMessage();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.bg}>
      {message && (
        <div
          className={`${styles.message} ${
            message.includes("успешно") ? "" : styles.error
          }`}
        >
          {message}
        </div>
      )}

      <div>
        <div className={styles.olList}>
          <button
            id="student"
            className={`${styles.list} ${
              type === "student" ? styles.active : ""
            }`}
            onClick={chaskForm}
          >
            Student
          </button>
          <button
            id="clube"
            className={`${styles.list} ${
              type === "clube" ? styles.active : ""
            }`}
            onClick={chaskForm}
          >
            Clube
          </button>
          <button
            id="admin"
            className={`${styles.list} ${
              type === "admin" ? styles.active : ""
            }`}
            onClick={chaskForm}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          {type === "student" ? (
            <h1 className={styles.text}>Student</h1>
          ) : type === "clube" ? (
            <h1 className={styles.text}>Clube</h1>
          ) : (
            <h1 className={styles.text}>Admin</h1>
          )}

          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>
            {loading ? "Загрузка..." : "Отправить"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
