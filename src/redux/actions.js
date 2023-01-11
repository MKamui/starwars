import axios from "axios";

export const GET_PEOPLE = 'GET_PEOPLE'
export const GET_PLANETS = 'GET_PLANETS'
export const SET_FAVORITES = 'SET_FAVORITES'
export const FILTER_FAVORITES = 'FILTER_FAVORITES'

async function peopleApi() {
  try {
    let people = [];
    let url = `https://swapi.dev/api/people/`;
    while (url) {
      const { data } = await axios(url);
      people = people.concat(data.results);
      url = data.next;
    }
    return people;
  } catch (error) {
    console.log(error);
  }
}

async function planetsApi() {
  try {
    let planets = [];
    let url = `https://swapi.dev/api/planets/`;
    while (url) {
      const { data } = await axios(url);
      planets = planets.concat(data.results);
      url = data.next;
    }
    return planets;
  } catch (error) {
    console.log(error);
  }
}

export function setFavorites(object) {
  return function (dispatch) {
    dispatch({type: "SET_FAVORITES", payload: object })
  }
}

export function filterFavorites(object) {
  return function (dispatch) {
    dispatch({type: "FILTER_FAVORITES", payload: object})
  }
}

export function getAllPeople() {
  return function (dispatch) {
    peopleApi().then((people) =>
      dispatch({ type: "GET_PEOPLE", payload: people })
    );
  };
}

export function getAllPlanets() {
  return function (dispatch) {
    planetsApi().then((people) =>
      dispatch({ type: "GET_PLANETS", payload: people })
    );
  };
}