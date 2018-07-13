/**
 * GET /codingsolution
 * Coding solution page.
 */

exports.getCodingSolution = (req, res) => {
  const unknownUser = !req.user;

  res.render("codingsolution", {
    title: "Coding Solution",
    unknownUser
  });
};
