import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LandingPage.css"
import Calendar from "react-calendar";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categories);
  const categoriesArr = Object.values(categoriesObj);

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src

    // const tasks = await dispatch(editTaskThunk(task.title, taskIcon, task.id, task.categoryId))
    // setTasks(tasks)
    // closeModal()
  };

  //! by clicking on the date buttons you can see all the checkins for that specific day
  const viewCheckin = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src
    // const tasks = await dispatch(getCheckInsThunk(checkinid)) 
    //! I guess check in id is associating with the year/month/date combination
  };

  if (!user) return null;

  return (
    <div className="landing-page">
      <div>Hello {user.username}:)</div>
      <div>
        Retreat is a simple tool to track your mood, daily task and journal.{" "}
      </div>
      <img
        width="250"
        src="https://media0.giphy.com/media/xT0xeAIDaF8WaeHF6w/giphy.gif?cid=ecf05e474ipkfkv5pmyulhvu2r5f6lv9gw3ks79qo02s3jzs&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        alt=""
      />
      <div className="go-add-task">
        <NavLink exact to="/manage_tasks">Let's go create some tasks for daily self-care <i className="fa-solid fa-arrow-right"></i></NavLink>
      </div>
      <section className="calendar">
        <Calendar onChange={onChange} value={value} locale="en-GB" />
        <div className="go-checkin">
        <NavLink exact to="/check_in">Check In for the day<img src="https://img.icons8.com/color/96/fat-emoji.png" alt="" /></NavLink></div>
      </section>

    </div>
  );
};
