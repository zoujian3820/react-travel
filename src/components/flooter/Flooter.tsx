/*
 * @Author: mrzou
 * @Date: 2021-05-08 22:59:13
 * @LastEditors: mrzou
 * @LastEditTime: 2021-05-08 23:17:03
 * @Description: file content
 */
import React from 'react'
import { Layout, Typography } from 'antd'

export const Flooter: React.FC = () => {
	return (
		<Layout.Footer>
			<Typography.Title level={3} style={{ textAlign: 'center' }}>
				版权所有 @ React 旅游网
			</Typography.Title>
		</Layout.Footer>
	)
}
