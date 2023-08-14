const Report = require("../models/report");
const BlogPost = require("../models/blog");


const AddNewReport = async (req, res) => {
    const { ReportText,BlogId, UserId, Comment} = req.body;
    try {
        const report = await Report.create({ReportText,BlogId, UserId, Comment});
        res.status(200).json(report);
    } catch (error) {
        console.error(error.message);
    }

  };
const getReport = async (req, res) => {
    try {
        const report = await Report.find({flag:false});
        res.status(200).json(report);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };
const AllReports = async (req, res) => {
    try {
        const report = await Report.find();
        res.status(200).json(report);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  };

  const UpdateReport = async (req, res) => { 
    const ReportId  = req.params.id;
    const report = await Report.findByIdAndUpdate(ReportId, {flag:true}, { new: true });
    const updatedReport= await report.save();
    res.json(updatedReport);
  };

  const DeleteReport = async (req, res) => {
    const ReportId = req.params.id;
 const {BlogId} = req.body
    const report = await Report.findById(ReportId);
    const blog = await BlogPost.findById(BlogId);
const newComments = blog.comments.filter((comment) => {return comment.comment !== report.Comment.comment})
    const NewCommentss = await BlogPost.findByIdAndUpdate(BlogId, {comments:newComments}, { new: true });
    const NewReports = await Report.findByIdAndUpdate(ReportId, {flag:true}, { new: true });
    const updatedNewCommentss= await NewCommentss.save();
    const updatedNewReports= await NewReports.save();
    res.json(updatedNewCommentss);
  }
  module.exports = {
    AddNewReport,
    getReport,
    UpdateReport,
    DeleteReport,
    AllReports,
  }; 