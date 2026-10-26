from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

OUT = r'C:\Eriel\Codex_Erl\outputs\CV_Eriel_Staff_Admin_Data_Entry_Revision.pdf'
W, H = A4
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameT', fontName='Times-Bold', fontSize=16.5, leading=18.2, alignment=TA_CENTER, spaceAfter=2))
styles.add(ParagraphStyle(name='ContactT', fontName='Times-Roman', fontSize=9.8, leading=11.2, alignment=TA_CENTER, spaceAfter=5))
styles.add(ParagraphStyle(name='SectionT', fontName='Times-Bold', fontSize=12, leading=13.2, spaceBefore=5.5, spaceAfter=1))
styles.add(ParagraphStyle(name='BodyT', fontName='Times-Roman', fontSize=10.15, leading=11.35, spaceAfter=0.5))
styles.add(ParagraphStyle(name='ItemT', fontName='Times-Bold', fontSize=10.8, leading=11.6, spaceAfter=0))
styles.add(ParagraphStyle(name='RoleT', fontName='Times-Bold', fontSize=10.65, leading=11.4, spaceAfter=0))
styles.add(ParagraphStyle(name='BulletT', fontName='Times-Roman', fontSize=10.0, leading=11.0, leftIndent=11, firstLineIndent=-7, bulletIndent=0, spaceAfter=0))
styles.add(ParagraphStyle(name='SmallT', fontName='Times-Roman', fontSize=10.0, leading=10.9, spaceAfter=0))

def P(s, name='BodyT'):
    return Paragraph(s, styles[name])
def sec(title):
    t = Table([[P(title.upper(), 'SectionT')]], colWidths=[185*mm])
    t.setStyle(TableStyle([('LINEBELOW',(0,0),(-1,-1),0.8,colors.black),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1)]))
    return t
def item(left, right):
    t=Table([[P(left,'ItemT'),P(right,'ItemT')]],colWidths=[130*mm,55*mm])
    t.setStyle(TableStyle([('ALIGN',(1,0),(1,0),'RIGHT'),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    return t
def bullets(items):
    return [Paragraph(x,styles['BulletT'],bulletText='•') for x in items]

doc=SimpleDocTemplate(OUT,pagesize=A4,leftMargin=12.7*mm,rightMargin=12.7*mm,topMargin=12.2*mm,bottomMargin=10.5*mm)
story=[P('ERIEL SETIAWAN DEWANTORO','NameT'),P('Bekasi, West Java, Indonesia | erieldewantoros@gmail.com | +62 858 8359 1786 | <font color="blue"><u>LinkedIn</u></font> | <font color="blue"><u>GitHub</u></font>','ContactT'),sec('Professional Summary'),P('Information Technology graduate candidate with completed studies and thesis defense in August 2026, with hands-on experience in administrative support, operational coordination, member communication, registration, and documentation. Comfortable using Microsoft Excel, Word, PowerPoint, Google Sheets, Google Workspace, and Google Earth for data entry, area mapping, and day-to-day administrative needs. Detail-oriented, responsive, and ready to work in Cinere with a personal laptop.'),sec('Education'),item('Universitas Bina Sarana Informatika','Sep 2022 - Aug 2026'),P('Bachelor of Information Technology','RoleT'),P('Completed studies and thesis defense in August 2026. Formal graduation scheduled for November 2026.','SmallT'),sec('Work Experience'),item('Club Tennis Circle Jakarta','Jul 2024 - Aug 2026'),P('Operations &amp; Member Relations','RoleT')]
story += bullets(['Supported day-to-day community operations, including member communication, scheduling, registration, and participant support.','Coordinated schedule updates and operational information to help maintain accurate communication and a positive member experience.','Handled member inquiries and service-related needs responsively, including follow-up on operational requirements.','Assisted tennis activities and inter-community matchday support through participant coordination and on-site operational assistance.'])
story += [item('Kementerian Agama Kota Bekasi','Dec 2025 - Feb 2026'),P('Technical Support &amp; Public Relations Intern','RoleT')]
story += bullets(['Supported administrative communication, documentation, and event preparation for internal activities and organizational needs.','Assisted coordination and internal committee activities to support the smooth execution of events and daily operations.','Created visual and communication materials using Canva, Microsoft Word, and CapCut, and provided basic computer and laptop troubleshooting support.'])
story += [sec('Relevant Skills'),P('<b>Administrative &amp; Data Entry:</b> Microsoft Excel, Microsoft Word, Microsoft PowerPoint, Google Sheets, Google Workspace, data entry, documentation, administrative support.','SmallT'),P('<b>Mapping &amp; Operations:</b> Google Earth, area mapping, scheduling, registration, operational coordination, participant support, follow-up.','SmallT'),P('<b>Technical &amp; Work Readiness:</b> Basic computer and laptop troubleshooting, personal laptop, ready to work in Cinere.','SmallT'),P('<b>Soft Skills:</b> Communication, attention to detail, problem solving, adaptability, stakeholder communication, teamwork, time management.','SmallT'),sec('Certifications')]
for x in ['Data Science Bootcamp - Dibimbing.id | 2025 | Final Score: 88.09 | Grade: A','Program Analyst / Analis Program - BNSP | 2025','PCAP: Programming Essentials in Python - Cisco Networking Academy / OpenEDG Python Institute | 2023','Fundamental Database MySQL - Coding Studio | 2024']:
    story.append(Paragraph('<font color="blue"><u>'+x+'</u></font>', styles['SmallT'], bulletText='•'))
story += [sec('Languages'),P('Indonesian: Native | English: Intermediate / B1 - able to communicate in daily and professional contexts','SmallT')]
doc.build(story)
print(OUT)
