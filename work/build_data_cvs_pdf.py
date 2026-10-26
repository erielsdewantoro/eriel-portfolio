from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle

OUTDIR=r'C:\Eriel\Codex_Erl\outputs'
st=getSampleStyleSheet()
st.add(ParagraphStyle(name='Name',fontName='Times-Bold',fontSize=16.5,leading=18.2,alignment=TA_CENTER,spaceAfter=2))
st.add(ParagraphStyle(name='Contact',fontName='Times-Roman',fontSize=9.8,leading=11.2,alignment=TA_CENTER,spaceAfter=5))
st.add(ParagraphStyle(name='Sec',fontName='Times-Bold',fontSize=12,leading=13.2,spaceBefore=5.5,spaceAfter=1))
st.add(ParagraphStyle(name='Body',fontName='Times-Roman',fontSize=10.05,leading=11.15,spaceAfter=.5))
st.add(ParagraphStyle(name='Item',fontName='Times-Bold',fontSize=10.7,leading=11.5,spaceAfter=0))
st.add(ParagraphStyle(name='DateLong',fontName='Times-Bold',fontSize=9.7,leading=11.1,spaceAfter=0))
st.add(ParagraphStyle(name='Role',fontName='Times-Bold',fontSize=10.55,leading=11.3,spaceAfter=0))
st.add(ParagraphStyle(name='Bul',fontName='Times-Roman',fontSize=9.95,leading=10.9,leftIndent=11,firstLineIndent=-7,bulletIndent=0,spaceAfter=0))
st.add(ParagraphStyle(name='Small',fontName='Times-Roman',fontSize=9.85,leading=10.7,spaceAfter=0))
def P(x,n='Body'): return Paragraph(x,st[n])
def S(x):
 t=Table([[P(x.upper(),'Sec')]],colWidths=[185*mm]);t.setStyle(TableStyle([('LINEBELOW',(0,0),(-1,-1),.8,colors.black),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1)]));return t
def I(a,b):
 n='DateLong' if len(b)>30 else 'Item';t=Table([[P(a,'Item'),P(b,n)]],colWidths=[110*mm,75*mm]);t.setStyle(TableStyle([('ALIGN',(1,0),(1,0),'RIGHT'),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]));return t
def B(items): return [Paragraph(i,st['Bul'],bulletText='•') for i in items]
thesis=['Developed a binary classification approach for Jakarta ISPU conditions, classifying Tidak Sehat+ versus Bukan Tidak Sehat+ using 2020-2024 data.','Prepared and analyzed 1,826 valid observations; compared Random Forest, XGBoost, LSTM, and GRU using a chronological train-test split.','Selected Random Forest based on the strongest overall test performance: F1-score 0.9600 and ROC-AUC 0.9813.']
common_exp=['Supported member communication, scheduling, registration, operational follow-up, and participant support in a tennis community setting.','Coordinated schedule updates and operational information while responding to member inquiries and service-related needs.']
certs=['Data Science Bootcamp - Dibimbing.id | 2025 | Final Score: 88.09 | Grade: A','Program Analyst / Analis Program - BNSP | 2025','PCAP: Programming Essentials in Python - Cisco Networking Academy / OpenEDG Python Institute | 2023','Fundamental Database MySQL - Coding Studio | 2024']
def create(fn,summary,skills):
 d=SimpleDocTemplate(OUTDIR+'\\'+fn,pagesize=A4,leftMargin=12.7*mm,rightMargin=12.7*mm,topMargin=12.2*mm,bottomMargin=10.5*mm)
 x=[P('ERIEL SETIAWAN DEWANTORO','Name'),P('Bekasi, West Java, Indonesia | erieldewantoros@gmail.com | +62 858 8359 1786 | <font color="blue"><u>LinkedIn</u></font> | <font color="blue"><u>GitHub</u></font>','Contact'),S('Professional Summary'),P(summary),S('Education'),I('Universitas Bina Sarana Informatika','Sep 2022 - Aug 2026'),P('Bachelor of Information Technology','Role'),P('Completed studies and thesis defense in August 2026. Formal graduation scheduled for November 2026.','Small'),S('Selected Data Project'),I('ISPU Jakarta Classification','Undergraduate Thesis')]
 x+=B(thesis)
 x += [S('Relevant Experience'),I('Club Tennis Circle Jakarta','Jul 2024 - Nov 2025 | Mar 2026 - Present'),P('Operations &amp; Member Relations','Role')]
 x+=B(common_exp)
 x += [I('Kementerian Agama Kota Bekasi','Dec 2025 - Feb 2026'),P('Technical Support &amp; Public Relations Intern','Role')]
 x+=B(['Supported administrative communication, documentation, internal activity coordination, and basic computer/laptop troubleshooting.'])
 x += [S('Relevant Skills')]
 for label,body in skills: x.append(P('<b>'+label+':</b> '+body,'Small'))
 x += [S('Certifications')]
 for c in certs: x.append(Paragraph('<font color="blue"><u>'+c+'</u></font>',st['Small'],bulletText='•'))
 x += [S('Languages'),P('Indonesian: Native | English: Intermediate / B1 - able to communicate in daily and professional contexts','Small')]
 d.build(x)

create('CV_Eriel_Setiawan_Dewantoro_Business_Intelligence_tfam.pdf','Information Technology graduate candidate with a foundation in SQL, Python, Pandas, data cleaning, exploratory data analysis, reporting, and data visualization. Completed an undergraduate data science thesis using a chronological evaluation approach and machine learning models, and holds a Data Science Bootcamp certification. Comfortable working with CSV/XLSX data, Microsoft Excel, Google Sheets, MySQL, and DBeaver. Interested in contributing to entry-level Business Intelligence reporting and analysis in a hybrid environment.', [('SQL & Data','SQL, MySQL, DBeaver, CSV/XLSX, data cleaning, data validation, exploratory data analysis.'),('Analysis & Reporting','Python, Pandas, Google Colab, Microsoft Excel, Google Sheets, reporting, data visualization, dashboard fundamentals.'),('Technical','Java, GitHub, basic database concepts, HTML, CSS, JavaScript.'),('Professional','Analytical thinking, attention to detail, problem solving, documentation, stakeholder communication.')])
create('CV_Eriel_Setiawan_Dewantoro_Data_Analyst.pdf','Information Technology graduate candidate with hands-on academic and project experience in SQL, Python, Pandas, data cleaning, exploratory data analysis, reporting, and data visualization. Completed an undergraduate thesis that prepared and analyzed Jakarta ISPU data and compared machine learning models using a chronological test set. Detail-oriented and comfortable translating datasets into structured findings through clear documentation, reporting, and communication. Interested in an entry-level Data Analyst role where analytical work supports practical business decisions.', [('Data Analysis','SQL, Python, Pandas, Google Colab, data cleaning, data validation, exploratory data analysis, descriptive analysis.'),('Reporting & Visualization','Microsoft Excel, Google Sheets, CSV/XLSX, reporting, data visualization, dashboard fundamentals.'),('Database & Technical','MySQL, DBeaver, Java, GitHub, basic database concepts.'),('Professional','Analytical thinking, problem solving, attention to detail, documentation, written and verbal communication.')])
print('Created two PDFs')
