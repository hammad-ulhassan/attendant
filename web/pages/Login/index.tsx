import { Button, Divider, Typography } from "antd";
import { Form, Formik } from "formik";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import { SimpleCard } from "../../shared/style";
import {
  LOGINLABEL,
  USERIDKEY,
  USERIDLABEL,
  USERPINKEY,
  USERPINLABEL,
} from "./constants";
import validationSchema from "./validationSchema";
const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    [USERIDKEY]: "",
    [USERPINKEY]: "",
  };

  const submitAction = useCallback((values: any) => {
    console.log(values);
    navigate("/user");
  }, []);

  return (
    <article
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        gap: "2%",
      }}
    >
      <SimpleCard>
        <Logo />
        <Divider />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitAction}
        >
          <Form>
            <section
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <InputField placeholder={USERIDLABEL} name={USERIDKEY} />
              <InputField placeholder={USERPINLABEL} name={USERPINKEY} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  gap: "1%",
                }}
              >
                <Button type="primary" htmlType="submit">
                  {LOGINLABEL}
                </Button>
                <Button type="default">Cancel</Button>
              </div>
            </section>
          </Form>
        </Formik>
      </SimpleCard>
      <SimpleCard>
        Are you an Admin? <Link to="/admin">Log In</Link>
      </SimpleCard>
    </article>
  );
};

export default Login;

/**
 * 
 * <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitAction}
      >
        <Form>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <InputField placeholder={USERIDLABEL} name={USERIDKEY} />
            <InputField placeholder={USERPINLABEL} name={USERPINKEY} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                gap:"1%"
              }}
            >
              <Button type="primary" htmlType="submit">
                {LOGINLABEL}
              </Button>
              <Button type="default">
                Cancel
              </Button>
            </div>
          </div>
        </Form>
      </Formik>



      <div
      style={{
        display:"flex",
        "alignItems":"stretch",
        justifyContent:"center",
        height: "100%",
        flexDirection:"column"
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitAction}
      >
        <Form>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <InputField placeholder={USERIDLABEL} name={USERIDKEY}/>
            <InputField placeholder={USERPINLABEL} name={USERPINKEY} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                gap:"1%"
              }}
            >
              <Button type="primary" htmlType="submit">
                {LOGINLABEL}
              </Button>
              <Button type="default">
                Cancel
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
 */
