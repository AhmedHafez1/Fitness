const axios = require('axios');
require('../css/main.css');

console.log('Runnnnnnnning 44444444444444444444444');
// Get a list of workouts from the database or API.
async function getWorkouts(): Promise<string> {
  // Make an API call to get the list of workouts.
  const workouts = await axios.get('/api/workouts');

  // Return the list of workouts.
  return workouts.data;
}

// Create a new workout in the database or API.
async function createWorkout(workout) {
  // Make an API call to create the new workout.
  await axios.post('/api/workouts', workout);
}

// Delete a workout from the database or API.
async function deleteWorkout(id) {
  // Make an API call to delete the workout.
  await axios.delete(`/api/workouts/${id}`);
}

// Get a list of exercises from the database or API.
async function getExercises() {
  // Make an API call to get the list of exercises.
  const exercises = await axios.get('/api/exercises');

  // Return the list of exercises.
  return exercises.data;
}

// Create a new exercise in the database or API.
async function createExercise(exercise) {
  // Make an API call to create the new exercise.
  await axios.post('/api/exercises', exercise);
}

// Delete an exercise from the database or API.
async function deleteExercise(id) {
  // Make an API call to delete the exercise.
  await axios.delete(`/api/exercises/${id}`);
}

// Track a workout session, recording the start time, end time, and duration.
async function trackWorkout(workout) {
  // Save the workout data to the database or API.
  await axios.post('/api/workouts', workout);
}

// Get the user's fitness stats, such as total steps taken, calories burned, and distance traveled.
async function getStats() {
  // Make an API call to get the user's stats.
  const stats = await axios.get('/api/stats');

  // Return the user's stats.
  return stats.data;
}

// Set the user's fitness goal, such as losing weight or gaining muscle.
async function setGoal(goal) {
  // Save the user's goal to the database or API.
  await axios.post('/api/goals', goal);
}

// Get recommendations for workouts or exercises based on the user's fitness goals and history.
async function getRecommendations() {
  // Make an API call to get recommendations for the user.
  const recommendations = await axios.get('/api/recommendations');

  // Return the recommendations for the user.
  return recommendations.data;
}

// Send a notification to the user, such as a reminder to workout or a congratulations on reaching a fitness goal.
async function sendNotification(notification) {
  // Send the notification to the user.
  await axios.post('/api/notifications', notification);
}
