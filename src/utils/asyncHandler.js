const asyncHandler = (requestHandler) => {
	(req, res, next) => {
		Promist.resolve(requestHandler(req, res, next)).catch((err) => next(err))
	}

}

export { asyncHandler }
