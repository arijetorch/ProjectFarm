function showReservationForm(activity) {
    document.getElementById("reservationForm").style.display = "flex";
    document.getElementById("activityName").innerText = activity;
  }
  
  function hideReservationForm() {
    document.getElementById("reservationForm").style.display = "none";
  }
  
function scrollToActivities() {
  const activitiesSection = document.getElementById('activities');
  activitiesSection.scrollIntoView({ behavior: 'smooth' });
}

function showReservationForm(activityName) {
  const form = document.getElementById('reservationForm');
  const activity = document.getElementById('activityName');
  activity.textContent = activityName;
  form.style.display = 'flex';
}

function hideReservationForm() {
  const form = document.getElementById('reservationForm');
  form.style.display = 'none';
}
