import { Container, Grid } from "@material-ui/core";
import "./ServicesList.css";
import React, { useEffect } from "react";
import ServiceItems from "./ServiceItems";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../../Store/serviceSlice";

const ServicesList = ({fetchId}) => {
  const dispatch = useDispatch();

  // const addServices = async () => {
  //   const res = await fetch('/api/admin/addservices',{
  //     method : 'POST',
  //     body : {},
  //     headers : {"Content-Type" : "application-json"},
  // })
  // const response = await res.json(res)
  // console.log(response)
  // }

  const { services } = useSelector((state) => state.service);
  console.log(services, "useslector");

  // before keeping getservices fn in redux>>>>>>>>>>>>>>>>>>

  // const [service, setService] = useState([])

  //   const getServices = async () => {
  //   const res = await fetch('/api/admin/services')
  //   const response = await res.json(res)

  //   setService(response.services)
  //   // console.log(response.services)
  // }

  const content1 = services.slice(0, 2).map((elem, index) => {
    // console.log(elem);
    return (
      <ServiceItems
        servicetype={elem.servicetype}
        description={elem.description}
        index={index}
        key={elem._id}
        id={elem._id}
        fetchId={fetchId}
      /> //if key is not there all the components will render on any particular component updation
    );
  });

  const content2 = services.slice(2, 4).map((elem, index) => {
    return (
      <ServiceItems
        servicetype={elem.servicetype}
        description={elem.description}
        index={index + 2}
        key={elem._id}
        id={elem._id}
      fetchId={fetchId}
      />
    );
  });
  // console.log(content1,'mapped service')

  useEffect(() => {
    // addServices()
    // getServices()
    dispatch(getServices());
  }, []);

  return (
    <Container maxWidth="lg">
      <center>
        <h1 className="text-4xl underline my-4 text-stone-500">OUR SERVICES</h1>
        <h4 className="text-xl my-6">
          " A well-groomed dog is a happy dog and a happy dog is a healthy dog "
        </h4>
      </center>

      <Grid className="content-div" item sm={12} style={{ height: "70vh" }}>
        <Grid
          className="content-div-start"
          item
          sm={4}
          style={{ height: "50vh" }}
        >
          {content1}

          {/* <Box className="content" spacing={2}>
            <Grid sm={2}>
              <h2>1</h2>
            </Grid>
            <Grid sm={10}>
              <h3>Styling</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integerpellentesque cursus.{" "}
              </p>
              <Button variant="contained">MORE INFO</Button>
            </Grid>
          </Box> */}

          {/* <Box className="content">
            <Grid sm={2}>
              <h2>3</h2>
            </Grid>
            <Grid sm={10}>
              <h3>Full Grooming</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integerpellentesque cursus.{" "}
              </p>
              <Button variant="contained">MORE INFO</Button>
            </Grid>
          </Box> */}
        </Grid>
        <Grid className="empty-div" item sm={4}></Grid>
        <Grid
          className="content-div-end"
          item
          sm={4}
          style={{ minHeight: "50vh" }}
        >
          {content2}

          {/* <Box className="content">
            <Grid sm={2}>
              <h2>2</h2>
            </Grid>
            <Grid sm={10}>
              <h3>Bath & Tidy Up</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integerpellentesque cursus.{" "}
              </p>
              <Button variant="contained">MORE INFO</Button>
            </Grid>
          </Box>
          <Box className="content">
            <Grid sm={2}>
              <h2>4</h2>
            </Grid>
            <Grid sm={10}>
              <h3>Deluxe Bath</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integerpellentesque cursus.{" "}
              </p>
              <Button variant="contained">MORE INFO</Button>
            </Grid>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesList;
