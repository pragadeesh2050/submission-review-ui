/**
 * Reducer to process actions related to submission details
 */
import {
  LOAD_SUBMISSION_DETAILS_FAILURE,
  LOAD_SUBMISSION_DETAILS_PENDING,
  LOAD_SUBMISSION_DETAILS_SUCCESS,
  LOAD_SUBMISSION_ARTIFACTS_FAILURE,
  LOAD_SUBMISSION_ARTIFACTS_PENDING,
  LOAD_SUBMISSION_ARTIFACTS_SUCCESS,
  POST_SUBMISSION_REVIEW_PENDING,
  POST_SUBMISSION_REVIEW_SUCCESS,
  POST_SUBMISSION_REVIEW_FAILURE,
  SUBMISSION_DETAILS_TABS,
  SWITCH_TAB
} from '../config/constants'

const initialState = {
  isLoading: true,
  isScorecardLoading: null,
  loadingId: null,
  submissionDetails: [],
  submissionArtifacts: {},
  loadingSubmissionIdOfArtifacts: null,
  currentTab: SUBMISSION_DETAILS_TABS['REVIEW_SUMMARY']
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBMISSION_DETAILS_SUCCESS:
      return { ...state, submissionDetails: action.submissionDetails, isLoading: false, loadingId: null }
    case LOAD_SUBMISSION_DETAILS_PENDING:
      return { ...state, isLoading: true, loadingId: action.submissionId }
    case LOAD_SUBMISSION_DETAILS_FAILURE:
      return { ...state, isLoading: false, loadingId: null }
    case LOAD_SUBMISSION_ARTIFACTS_SUCCESS:
      return { ...state, submissionArtifacts: action.submissionArtifacts, isLoading: false, loadingSubmissionIdOfArtifacts: null }
    case LOAD_SUBMISSION_ARTIFACTS_PENDING:
      return { ...state, isLoading: true, loadingSubmissionIdOfArtifacts: action.submissionId }
    case LOAD_SUBMISSION_ARTIFACTS_FAILURE:
      return { ...state, isLoading: false, loadingSubmissionIdOfArtifacts: null }
    case POST_SUBMISSION_REVIEW_PENDING:
      return { ...state, isScorecardLoading: true }
    case POST_SUBMISSION_REVIEW_SUCCESS:
      return { ...state, isScorecardLoading: false }
    case POST_SUBMISSION_REVIEW_FAILURE:
      return { ...state, isScorecardLoading: false }
    case SWITCH_TAB:
      return { ...state, currentTab: action.tab }
    default:
      return state
  }
}
