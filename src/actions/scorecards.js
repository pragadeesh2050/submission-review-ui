import { fetchScorecard } from '../services/scorecards'
import {
  LOAD_SCORECARDS_PENDING,
  LOAD_SCORECARDS_SUCCESS,
  LOAD_SCORECARDS_FAILURE
} from '../config/constants'

/**
 * Loads Score card details
 */
export function loadScorecards () {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_SCORECARDS_PENDING
    })

    fetchScorecard().then(scorecards => dispatch({
      type: LOAD_SCORECARDS_SUCCESS,
      scorecards
    })).catch(() => dispatch({
      type: LOAD_SCORECARDS_FAILURE
    }))
  }
}
