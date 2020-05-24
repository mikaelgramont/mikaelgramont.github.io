const makeTS = (dateAsDMY) => {
  const parts = dateAsDMY.split("-");
  const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  return new Date(newDate);
}

const data = [
  { role: "Web Developer", label: "Gibmedia", location: "Toulouse, France", starting_time: makeTS('15-01-2007'), ending_time: makeTS('15-06-2010'), },
  { role: "Fullstack Developer", label: "Carsala", location: "Berkeley, CA", starting_time: makeTS('15-06-2010'), ending_time: makeTS('14-09-2010'), },
  { role: "Senior Front-End Engineer", label: "GridNet", location: "San Francisco, CA", starting_time: makeTS('15-09-2010'), ending_time: makeTS('07-10-2011'), },
  { role: "Senior UX Engineer", label: "YouTube", location: "San Bruno, CA", starting_time: makeTS('10-10-2011'), ending_time: makeTS('15-07-2016'), },
  { role: "Senior UX Engineer", label: "Google A&C", location: "Paris, France", starting_time: makeTS('15-07-2016'), ending_time: makeTS('30-09-2017'), },
  { role: "", label: "On a break", location: "Biarritz, France", starting_time: makeTS('01-10-2017'), ending_time: makeTS('16-02-2018'), },
  { role: "Senior Front-End Engineer", label: "OnRewind", location: "Bidart, France", starting_time: makeTS('19-02-2018'), ending_time: makeTS('20-07-2019'), },
  { role: "Freelancer", label: "", location: "Arbonne, France", starting_time: makeTS('25-07-2019'), ending_time: makeTS('25-05-2020'), },
];

const roleEl = document.querySelector('#role');
const labelEl = document.querySelector('#label');
const locationEl = document.querySelector('#location');

const onSelect = (e) => {
  // This is not accessible!
  // TODO: display the data as a table as well
  if (!e.target || !e.target.classList.contains('bar')) return;
  const key = parseInt(e.target.getAttribute('data-key'), 10);
  if (isNaN(key)) { return };
  const { label, location, role, } = data[key];

  roleEl.innerText = role;
  labelEl.innerText = label;
  locationEl.innerText = location;
};

const onUnselect = (e) => {
  roleEl.innerText = '';
  labelEl.innerText = '';
  locationEl.innerText = '';
};

const timelineEl = document.querySelector('#timeline');
timelineEl.addEventListener('mouseover', onSelect);
timelineEl.addEventListener('mouseout', onUnselect);
