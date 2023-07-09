export enum SERVICE_CMD {
  GET_USER = 'get-user',
  GET_USER_BY_EMAIL = 'get-user-by-email',
  GET_USERS = 'get-users',
  GET_MY_JOBS = 'get-my-jobs',
  GET_SELF_USER = 'get-self-user',
  UPDATE_USER = 'update-user',
  DELETE_USER = 'delete-user',
  CREATE_USER = 'create-user',
  GET_REGISTER_MAIL = 'get-mail-register',
  CREATE_APPOINTMENT = 'create-appointment',
  DELETE_APPOINTMENT = 'delete-appointment',
  UPDATE_APPOINTMENT = 'update-appointment',
  ACCEPT_APPOINTMENT = 'accept-appointment',
  GET_APPOINTMENT_BY_ID = 'get-appointment-by-id',
  GET_COMPANIES = 'get-companies',
  GET_COMPANY = 'get-company',
  GET_COMPANY_BY_ID = 'get-company-by-id',
  CREATE_COMPANY = 'create-company',
  UPDATE_COMPANY = 'update-company',
  DELETE_COMPANY = 'delete-company',
  GET_COMPANY_SIZE_OPTIONS = 'get-company-size-options',
  GET_COMPANY_SIZE_OPTIONS_BY_ID = 'get-company-size-options-by-id',
  CREATE_COMPANY_SIZE_OPTIONS = 'create-company-size-options',
  UPDATE_COMPANY_SIZE_OPTIONS = 'update-company-size-options',
  DELETE_COMPANY_SIZE_OPTIONS = 'delete-company-size-options',
  GET_COMPANY_REVENUE_OPTIONS = 'get-company-revenue-options',
  GET_COMPANY_REVENUE_OPTIONS_BY_ID = 'get-company-revenue-options-by-id',
  CREATE_COMPANY_REVENUE_OPTIONS = 'create-company-revenue-options',
  UPDATE_COMPANY_REVENUE_OPTIONS = 'update-company-revenue-options',
  DELETE_COMPANY_REVENUE_OPTIONS = 'delete-company-revenue-options',
  GET_COMPANY_SECTOR_OPTIONS = 'get-company-sector-options',
  GET_COMPANY_SECTOR_OPTIONS_BY_ID = 'get-company-sector-options-by-id',
  CREATE_COMPANY_SECTOR_OPTIONS = 'create-company-sector-options',
  UPDATE_COMPANY_SECTOR_OPTIONS = 'update-company-sector-options',
  DELETE_COMPANY_SECTOR_OPTIONS = 'delete-company-sector-options',
  GET_JOB_ADS = 'get-job-ads',
  GET_JOB_ADS_BY_ID = 'get-job-ads-by-id',
  CREATE_JOB_ADS = 'create-job-ads',
  UPDATE_JOB_ADS = 'update-job-ads',
  DELETE_JOB_ADS = 'delete-job-ads',
  APPLY_JOB_ADS = 'apply-job-ads',
  CANCEL_APPLY_JOB_ADS = 'cancel-apply-job-ads',
  GET_APPOINTMENTS = 'get-appointments',
  VERIFY_ACCOUNT = 'auth_verify_account',
  UPDATE_TOKEN_USER = 'update-token-user'
}

export enum SERVICE_NAME {
  AUTH = 'AUTH_SERVICE',
  APP = 'APPLICATION_SERVICE',
  MAILING = 'MAILING_SERVICE'
}
