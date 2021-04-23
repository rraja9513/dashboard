import React,{Component} from 'react';
export default class Trust extends Component{
    render(){
        return(
            <div>
                <p><a href="https://i1.wp.com/semiengineering.com/wp-content/uploads/OneSpin_auto-cybersecurity-risks-fig0.jpg?ssl=1" style={{boxSizing:"border-box",backgroundColor:"transparent",borderBottom:"1px solid rgb(213, 213, 213)",color:"rgb(25, 85, 165) !important"}}><img alt="" class="alignright jetpack-lazy-image jetpack-lazy-image--handled wp-image-24171640" src="https://i1.wp.com/semiengineering.com/wp-content/uploads/OneSpin_auto-cybersecurity-risks-fig0.jpg?resize=200%2C159&amp;ssl=1" style={{border:"0px",boxSizing:"border-box",float:"right",height:"auto",margin:"5px 0px 5px 20px",maxWidth:"100%",verticalAlign:"middle",width:"200px"}} /></a>As a society, we trust in a lot of things in order for our daily lives to proceed. Trust is embedded in our lives. We trust in everything from the products we use to our relationships we have to our government. But when our trust is broken or shaken in something or someone, it is hard very hard for to for us to have confidence in that something or someone again.</p>

<p>If we apply the concept to of&nbsp;trust&nbsp;and&nbsp;trustworthiness&nbsp;to hardware design, we might discover that these terms &nbsp;are not yet part of the daily vocabulary of hardware design engineers. However, they are on the rise, along with other security terms, and worthy of attention. We have included both words in our&nbsp;glossary&nbsp;of trust and security terms and acronyms for hardware engineers:</p>
<p><span style={{color:"rgb(102,102,102)",fontSize:"14px"}}><strong>Trust</strong>: The belief that an IP or IC is free from malicious exploits.</span></p>

<p><span style={{color:"rgb(102,102,102)",fontSize:"14px"}}><strong>Trustworthiness</strong>: Worthy of being trusted to be free from hardware Trojans. Worthy of being trusted to fulfil whatever critical requirements may be needed for a particular component, subsystem, or system.</span></p>

<p>In defense and mil/aero applications, trust and security assurance have been a top priority for many years. Most people have heard of counterfeit integrated circuits (ICs) and silicon manufacturing risks in overseas, untrusted foundries. However, all IC supply chain stages, including RTL design and integration of third-party intellectual properties (3PIPs) in systems-on-chips (SoCs), could be targeted by attackers. If you think that this type of supply chain attack, where malicious functions are inserted into a soft IP before production or delivery, are rare, refer to the recent SolarWinds scandal,&nbsp;the biggest hack of the US government&nbsp;in years, and consider how this same attack could be perpetrated in software or hardware. In a world full of autonomous vehicles and other AI-powered cyber-physical systems, IoT devices, smartphones, data centers processing and storing private information and IPs, it is hard to think of applications that have no appeal to potential attackers.</p>

<p><strong>Trust assessment</strong><br />
In light of the recent attack, intentional insertions may be at the forefront of everyone&rsquo;s mind, however both intentional and unintentional weaknesses may offer opportunity to an attacker for exploitation. Semiconductor IPs should go through a systematic, repeatable process to detect weaknesses and vulnerabilities before fabrication. Ideally, the process should require low engineering effort and deliver evidence or measure of trustworthiness. While the IP provider might support such a process, ultimately, it must be independent.</p>

<p><strong>Automation in action</strong><br />
OneSpin&rsquo;s Trust Assessment Platform (TAP) App detects and ensures the absence of entire classes of trust and security issues, and supports a growing range of hardware weaknesses listed in the&nbsp;MITRE CWE database. It identifies multiple classes of triggers (set of events and states activating potentially harmful functions), reliability issues, and deadlock conditions that could lead to denial-of-service (DoS) attacks. Users can configure and customize the set of checks that are executed.</p>

<p><a href="https://i0.wp.com/semiengineering.com/wp-content/uploads/OneSpin_trust-not-good-feeling-fig1-TAP-Flow-6MS05.png?ssl=1" style={{boxSizing:"border-box",backgroundColor:"transparent",borderBottom:"1px solid rgb(213, 213, 213)",color:"rgb(25, 85, 165) !important"}}><img alt="" class="alignnone jetpack-lazy-image jetpack-lazy-image--handled size-full wp-image-24178648" src="https://i0.wp.com/semiengineering.com/wp-content/uploads/OneSpin_trust-not-good-feeling-fig1-TAP-Flow-6MS05.png?resize=480%2C590&amp;ssl=1" style={{border:"0px",boxSizing:"border-box",height:"auto",maxWidth:"100%",verticalAlign:"middle",width:"480px"}}/></a></p>

<p>As part of the Aerospace Corporation&rsquo;s hardware assurance efforts, Aerospace performed an evaluation of&nbsp;OneSpin&rsquo;s&nbsp;tool&nbsp;to determine its effectiveness in hardware Trojan detection. Three host designs,&nbsp;SpaceWire, RISC-V Taiga, and LEON3, were chosen to represent real-world MIL/Aero intellectual property (IP) of varying size and complexity. Six hardware Trojan triggers and four payloads were developed (coded) based on Aerospace&rsquo;s hardware Trojan catalog and taxonomy, as well as academic literature, and then inserted into the host designs.</p>

<p>Nine Trojans were created from the combinations of triggers and payloads and inserted into the host designs. Three &ldquo;golden&rdquo; host designs (without Trojans) served as the baseline. Versions of the host designs with Trojans inserted&nbsp;were used to evaluate the tool against the baseline. OneSpin provided a TCL setup script template which required minimal modification to run the&nbsp;tool; it utilized&nbsp;OneSpin&rsquo;s&nbsp;conventional flow, in which the&nbsp;user specifies&nbsp;the HDL design files and reset sequence, and then&nbsp;executes&nbsp;the elaborate and compile command. From this point, the flow allows the user to run either the OneSpin TAP App or OneSpin DV-Inspect formal &ldquo;apps&rdquo;.&nbsp;The&nbsp;tool&nbsp;was executed on each of the designs&nbsp;and&nbsp;reported back the total number of issues (potential Trojans). For each issue, the tool also reported the&nbsp;location in the design and a short description,&nbsp;used for&nbsp;further investigation to determine if the issue&nbsp;is&nbsp;a legitimate hardware Trojan.</p>

<p>Results demonstrate that the design analysis step requires&nbsp;a one-time process of&nbsp;minutes to hours of computational runtime for industrial-scale IP designs. The process efficiently identifies&nbsp;different classes of&nbsp;trigger,&nbsp;reliability, and in the future, other&nbsp;issues&nbsp;(or vulnerabilities/weaknesses),&nbsp;which could&nbsp;be&nbsp;leveraged to introduce Trojans in subsequent design implementation steps.&nbsp;The reported issues will focus on those functions in the RTL source code that require attention,&nbsp;while&nbsp;minimizing excess&nbsp;noise.</p>

<p>Aerospace&rsquo;s use of the OneSpin TAP App was documented in a presentation delivered at last year&rsquo;s Design Automation Conference titled &ldquo;Automated Trustworthiness Assessment of Third-party Semiconductor IPs.&rdquo;.</p>
            </div>
        )
    }
}