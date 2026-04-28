import Nav from 'react-bootstrap/Nav';
import React from 'react';


function Navbar() {
  return (
    <Nav
      activeKey="/https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_1tmvcmz30t_e&adgrpid=1329311168025487&hvadid=83082214468070&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=157667&hvtargid=kwd-83082829756950:loc-90&hydadcr=5650_2377261&mcid=6233a7c588f136ff9af0c63d9f6745bc&msclkid=cb354f719152162170bc269902dd9b3f"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_1tmvcmz30t_e&adgrpid=1329311168025487&hvadid=83082214468070&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=157667&hvtargid=kwd-83082829756950:loc-90&hydadcr=5650_2377261&mcid=6233a7c588f136ff9af0c63d9f6745bc&msclkid=cb354f719152162170bc269902dd9b3f">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;